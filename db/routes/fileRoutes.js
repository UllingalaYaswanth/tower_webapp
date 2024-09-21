import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { Dropbox } from 'dropbox';
import { fileURLToPath } from 'url';
import File from '../models/fileModel.js';
import XLSX from 'xlsx';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

const dropboxToken = 'sl.B9TnrE5YzjSfzm1E7a958waVywlYWnUuTSf8k0lGgbpWdpIbE1qNUvJvUa_nQbQhL9MK1Mgpm6rePtQUhANEzXY0u3Y4Yymoi9uIU7jOvDs8ynkS13NuGR0wby1kt6g9lvg5XEWVYuZNTvzSaB7i2uU'; // Replace with your actual access token
const dbx = new Dropbox({ accessToken: dropboxToken });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dropboxFolderPath = '/towers';

const ensureFolderExists = async (folderPath) => {
  try {
    await dbx.filesCreateFolderV2({ path: folderPath });
    console.log(`Folder created: ${folderPath}`);
  } catch (error) {
    if (error.response && error.response.error && error.response.error['.tag'] === 'path_conflict') {
      console.log(`Folder already exists: ${folderPath}`);
    } else {
      console.error('Error creating Dropbox folder:', error);
      throw error;
    }
  }
};

router.post('/upload', upload.array('files'), async (req, res) => {
    if (!req.body.folderName) {
      return res.status(400).json({ error: 'No folder name provided' });
    }
  
    const folderPath = `${dropboxFolderPath}/${req.body.folderName}`;
  
    try {
      await ensureFolderExists(folderPath);
  
      for (const file of req.files) {
        const fileContent = fs.readFileSync(file.path);
        const dropboxFilePath = `${folderPath}/${file.originalname}`;
  
        if (file.mimetype === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
          // Convert Excel to JSON
          const workbook = XLSX.read(fileContent, { type: 'buffer' });
  
          // Aggregate all sheet data
          const combinedJsonData = {};
          
          for (const sheetName of workbook.SheetNames) {
            const sheet = workbook.Sheets[sheetName];
            const jsonData = XLSX.utils.sheet_to_json(sheet);
            
            combinedJsonData[sheetName] = jsonData;
          }
  
          const combinedJsonFilePath = `${folderPath}/${file.originalname.replace('.xlsx', '.json')}`;
          const combinedJsonFileContent = JSON.stringify(combinedJsonData, null, 2);
  
          // Upload combined JSON file to Dropbox
          await dbx.filesUpload({ path: combinedJsonFilePath, contents: combinedJsonFileContent });
  
          // Upload Excel file to Dropbox
          await dbx.filesUpload({ path: dropboxFilePath, contents: fileContent });
  
          const fileData = {
            filename: file.originalname,
            filePath: dropboxFilePath,
            contentType: file.mimetype,
            uploadedAt: new Date()
          };
  
          const mongoFile = new File(fileData);
          await mongoFile.save();
        } else {
          // Upload non-Excel files to Dropbox
          await dbx.filesUpload({ path: dropboxFilePath, contents: fileContent });
  
          const fileData = {
            filename: file.originalname,
            filePath: dropboxFilePath,
            contentType: file.mimetype,
            uploadedAt: new Date()
          };
  
          const mongoFile = new File(fileData);
          await mongoFile.save();
        }
      }
  
      res.json({ message: 'Files uploaded successfully' });
    } catch (error) {
      console.error('Error processing files:', error);
      res.status(500).json({ error: 'An error occurred while processing the files.', details: error.message });
    } finally {
      req.files.forEach(file => {
        try {
          fs.unlinkSync(file.path);
        } catch (err) {
          if (err.code === 'ENOENT') {
            console.warn('File not found for deletion:', file.path);
          } else {
            console.error('Failed to delete uploaded files:', err);
          }
        }
      });
    }
  });
  


// Fetch metadata and list of files from Dropbox
router.get('/files', async (req, res) => {
  try {
    const response = await dbx.filesListFolder({ path: dropboxFolderPath });
    const fileNames = response.result.entries.map(file => file.name);
    const filesMetadata = await File.find({ filename: { $in: fileNames } });

    const files = response.result.entries.map(file => {
      const metadata = filesMetadata.find(meta => meta.filename === file.name) || {};
      return {
        name: file.name,
        uploaded: metadata.uploadedAt,
        status: metadata.status || 'Unknown',
        lastopened: metadata.lastopened || 'Unknown',
      };
    });

    res.json({ files });
  } catch (error) {
    console.error('Error fetching files from Dropbox:', error);
    res.status(500).json({ error: 'Failed to fetch files from Dropbox' });
  }
});

// List all JSON files in a specific folder
router.get('/list/:folderId', async (req, res) => {
  const { folderId } = req.params;
  const folderPath = `${dropboxFolderPath}/${folderId}`;
  
  try {
    const response = await dbx.filesListFolder({ path: folderPath });
    // Filter out files with .json extension
    const jsonFiles = response.result.entries
      .filter(file => file.name.endsWith('.json'))
      .map(file => file.path_display);
    
    res.json({ files: jsonFiles });
  } catch (error) {
    console.error('Error listing files from Dropbox:', error);
    res.status(500).json({ error: 'Failed to list files from Dropbox' });
  }
});

// Fetch specific JSON file from Dropbox
router.get('/:folderId/:filename/json', async (req, res) => {
    const { folderId, filename } = req.params;
    const jsonFilePath = `${dropboxFolderPath}/${folderId}/${filename}.json`; // Ensure filename includes .json extension
    
    console.log('Attempting to fetch JSON file at path:', jsonFilePath);
  
    try {
      const response = await dbx.filesDownload({ path: jsonFilePath });
      const fileContent = response.result.fileBinary.toString('utf8');
      res.json(JSON.parse(fileContent));
    } catch (error) {
      console.error('Error fetching JSON file from Dropbox:', error);
      if (error.response && error.response.error) {
        const { '.tag': tag } = error.response.error;
        if (tag === 'path_lookup') {
          res.status(404).json({ error: 'JSON file not found', path: jsonFilePath });
        } else if (tag === 'path') {
          res.status(409).json({ error: 'Path error: file might be a directory or not exist', path: jsonFilePath });
        } else {
          res.status(500).json({ error: 'Internal server error', details: error.response.error });
        }
      } else {
        res.status(500).json({ error: 'Failed to fetch JSON file from Dropbox', details: error.message });
      }
    }
  });
  

export default router;
