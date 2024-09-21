// import express from 'express';
// import cors from 'cors';
// import mongoose from 'mongoose';
// import fileRoutes from './routes/fileRoutes.js';
// import fs from 'fs'
// import path from 'path'

// // MongoDB connection URI
// const mongoURI = 'mongodb+srv://sruthi:towers@bsnlcluster.xlzyayu.mongodb.net/';

// // Connect to MongoDB
// mongoose.connect(mongoURI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(() => {
//   console.log('Connected to MongoDB');
// }).catch(err => {
//   console.error('MongoDB connection error:', err);
// });

// const app = express();
// const port = 8084;

// // Enable CORS
// app.use(cors());

// // Use file routes for other endpoints
// app.use('/api/files', fileRoutes);

// // obj viewer-----------------

// const directoryPath = path.join(__dirname, '../frontend/public/HOHOU00677_OBJ/Data');

// app.get('/api/models', (req, res) => {
//   fs.readdir(directoryPath, (err, files) => {
//     if (err) {
//       console.error('Error reading directory:', err);
//       return res.status(500).json({ error: 'Unable to scan directory' });
//     }
    
//     const supportedExtensions = [
//         '.obj', '.mtl', '.fbx', '.dae', '.gltf', '.glb',
//         '.jpg', '.png', '.tiff', '.bmp'
//       ];
//     const filteredFiles = files.filter(file => 
//       supportedExtensions.includes(path.extname(file).toLowerCase())
//     );

//     res.json(filteredFiles);
//   });
// });

// app.use(express.static(path.join(__dirname, '../frontend/public')));

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });


// import express from 'express';
// import cors from 'cors';
// import mongoose from 'mongoose';
// import fileRoutes from './routes/fileRoutes.js';
// import fs from 'fs';
// import path from 'path';
// import { fileURLToPath } from 'url';

// // MongoDB connection URI
// const mongoURI = 'mongodb+srv://sruthi:towers@bsnlcluster.xlzyayu.mongodb.net/';

// // Connect to MongoDB
// mongoose.connect(mongoURI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(() => {
//   console.log('Connected to MongoDB');
// }).catch(err => {
//   console.error('MongoDB connection error:', err);
// });

// const app = express();
// const port = 8084;

// // Enable CORS
// app.use(cors());

// // Use file routes for other endpoints
// app.use('/api/files', fileRoutes);

// // obj viewer-----------------

// // Determine __dirname for ES modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const directoryPath = path.join(__dirname, '../frontend/public/HOHOU00677_OBJ/Data');

// app.get('/api/models', (req, res) => {
//   fs.readdir(directoryPath, (err, files) => {
//     if (err) {
//       console.error('Error reading directory:', err);
//       return res.status(500).json({ error: 'Unable to scan directory' });
//     }
    
//     const supportedExtensions = [
//         '.obj', '.mtl', '.fbx', '.dae', '.gltf', '.glb',
//         '.jpg', '.png', '.tiff', '.bmp'
//     ];
//     const filteredFiles = files.filter(file => 
//       supportedExtensions.includes(path.extname(file).toLowerCase())
//     );

//     res.json(filteredFiles);
//   });
// });

// app.use(express.static(path.join(__dirname, '../frontend/public')));

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });



import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import fileRoutes from './routes/fileRoutes.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// MongoDB connection URI
const mongoURI = 'mongodb+srv://sruthi:towers@bsnlcluster.xlzyayu.mongodb.net/';

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

const app = express();
const port = 8084;

// Enable CORS
app.use(cors());

// Use file routes for other endpoints
app.use('/api/files', fileRoutes);

// obj viewer-----------------

// Determine __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get('/api/models', (req, res) => {

  const userEmail = req.query.email; // Get the email from query parameter
  let directoryPath;

  // Set the directory path based on the user's email
  if (userEmail === 'user1@gmail.com') {
    directoryPath = path.join(__dirname, '../frontend/public/HOHOU00677_OBJ/Data');
  } else if (userEmail === 'user2@gmail.com') {
    directoryPath = path.join(__dirname, '../frontend/public/DCWDC00317A_OBJ/Data');
  } else if (userEmail === 'user3@gmail.com') {
    directoryPath = path.join(__dirname, '../frontend/public/DADAL00398B_OBJ/Data');
  } else {
    return res.status(400).json({ error: 'Invalid email' });
  }

  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error('Error reading directory:', err);
      return res.status(500).json({ error: 'Unable to scan directory' });
    }
    
    const supportedExtensions = [
        '.obj', '.mtl', '.fbx', '.dae', '.gltf', '.glb',
        '.jpg', '.png', '.tiff', '.bmp'
    ];
    const filteredFiles = files.filter(file => 
      supportedExtensions.includes(path.extname(file).toLowerCase())
    );

    res.json(filteredFiles);
  });
});

app.use(express.static(path.join(__dirname, '../frontend/public')));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
