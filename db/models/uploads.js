// db/models/uploads.js
import mongoose from 'mongoose';

// Define the schema for the uploads collection
const uploadsSchema = new mongoose.Schema({
    siteName: {
        type: String,
        required: true
    },
    uploaded: {
        type: Date,
        default: Date.now
    },
    statusProcess: {
        type: String,
        required: true
    },
    lastMaintained: {
        type: Date
    }
});

// Export the model based on the schema
const Upload = mongoose.model('Upload', uploadsSchema);
export default Upload;
