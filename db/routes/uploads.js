// db/routes/uploads.js
import express from 'express';
import Upload from '../models/uploads.js'; // Importing the Upload model

const router = express.Router();

// Route handler for creating a new upload
router.post('/', async (req, res) => {
    try {
        const { siteName, statusProcess, lastMaintained } = req.body;

        const newUpload = new Upload({
            siteName,
            statusProcess,
            lastMaintained
        });

        await newUpload.save();
        res.status(201).json(newUpload);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Route handler for retrieving all uploads
router.get('/', async (req, res) => {
    try {
        const uploads = await Upload.find(); // Fetch all uploads
        res.status(200).json(uploads);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default router;
