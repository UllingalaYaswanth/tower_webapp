import mongoose from 'mongoose';

const fileSchema = new mongoose.Schema({
  filename: { type: String, required: true },
  filePath: { type: String, required: true },
  contentType: { type: String, required: true },
  uploadedAt: { type: Date, default: Date.now },
  status: { type: String, default: 'Unknown' },
  lastopened: { type: Date, default: Date.now }
});

const File = mongoose.model('File', fileSchema);

export default File;
