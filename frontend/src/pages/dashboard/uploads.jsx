import React, { useState } from "react";
import {
  Typography,
  Input,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Card,
} from "@material-tailwind/react";
import ExcelImage from './img/excel.webp';
import ObjImage from './img/obj.png';
import LazImage from './img/laz.avif';
import KmlImage from './img/kml.webp';
import PdfImage from './img/pdf.webp';

export function Uploads() {
  const [files, setFiles] = useState([]);
  const [tags, setTags] = useState("");
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedField, setSelectedField] = useState("");

  const handleOpen = (field) => {
    setSelectedField(field);
    setOpen(true);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFiles([selectedFile]);
  };

  const handleRemoveFile = () => {
    setFiles([]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const file = files[0];
    const fileName = file.name;

    // Construct file path based on selected field and file name
    let path = '/';
    switch (selectedField) {
      case "Excel file":
        path += 'excel/';
        break;
      case "Obj file":
        path += 'obj/';
        break;
      case "Laz file":
        path += 'laz/';
        break;
      case "kml file":
        path += 'kml/';
        break;
      case "pdf file":
        path += 'pdf/';
        break;
      default:
        path += 'unknown/';
    }
    path += fileName;

    try {
      // Mock upload to Dropbox
      // Replace with actual upload logic
      console.log(`Uploading ${fileName} to ${path}`);

      // Send file details to backend
      const response = await fetch('http://localhost:5000/api/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          filename: fileName,
          path: path,
          tags: tags,
          // Add additional metadata as needed
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to save file details to the database');
      }

      setUploadSuccess(true);
      setTimeout(() => {
        setUploadSuccess(false);
      }, 3000);
    } catch (error) {
      console.error('Error during file upload:', error);
    }
  };

  const cardData = [
    { name: "Excel file", img: ExcelImage },
    { name: "Obj file", img: ObjImage },
    { name: "Laz file", img: LazImage },
    { name: "kml file", img: KmlImage },
    { name: "pdf file", img: PdfImage },
  ];

  return (
    <div className="my-20 mx-10 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-5">
      {/* Upload card */}
      <Card onClick={() => handleOpen("Upload")}>
        <Card.Body className="flex items-center cursor-pointer">
          <Typography variant="h6" color="blue-gray">
            Upload Documents
          </Typography>
        </Card.Body>
      </Card>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogHeader>
          <Typography variant="h5" color="blue-gray">
            Select Document Type
          </Typography>
        </DialogHeader>
        <DialogBody>
          <div className="grid gap-4 grid-cols-2">
            {cardData.map((card) => (
              <Card key={card.name} onClick={() => handleOpen(card.name)}>
                <Card.Body className="flex items-center cursor-pointer">
                  <img src={card.img} className="w-8 h-8 mr-2 rounded-full" />
                  <Input
                    type="file"
                    color="blue"
                    label={`Choose ${card.name}`}
                    onChange={handleFileChange}
                    className="p-3"
                    required
                  />
                </Card.Body>
              </Card>
            ))}
          </div>
        </DialogBody>
        <DialogFooter>
          <Button color="red" onClick={() => setOpen(false)}>
            Close
          </Button>
          <Button color="blue" className="ms-3">
            Upload
          </Button>
        </DialogFooter>
      </Dialog>

  
    </div>
  );
}

export default Uploads;