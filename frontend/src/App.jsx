// import { Routes, Route, Navigate } from "react-router-dom";
// import { Dashboard, Auth } from "@/layouts";
// import { SignIn } from "./pages/auth";

// function App() {
//   return (
//     <Routes>
//       <Route path="/dashboard/*" element={<Dashboard />} />
//       <Route path="/auth/*" element={<Auth />} />
//       <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
//       <Route path="/auth/sign-in" element={<SignIn />} />
//     </Routes>
//   );
// }

// export default App;




import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import { SignIn } from "./pages/auth";

function App() {
  return (
    <Routes>
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/auth/*" element={<Auth />} />
      <Route path="/auth/sign-in" element={<SignIn />} />
      <Route path="*" element={<Navigate to="/auth/sign-in" replace />} />
    </Routes>
  );
}

export default App;

// import React, { useState, useEffect } from "react";
// import {
//   Typography,
//   Card,
//   CardBody,
// } from "@material-tailwind/react";
// import * as OV from 'online-3d-viewer';

// function App() {

//   const userEmail = localStorage.getItem('userEmail')
//   console.log('user email',userEmail)
  
//   const [modelFiles, setModelFiles] = useState([]);
  
//   useEffect(() => {
//     const fetchModelFiles = async () => {
//       try {
//         const response = await fetch(`http://localhost:8084/api/models?email=${userEmail}`);
//         const files = await response.json();
//         setModelFiles(files);
//       } catch (error) {
//         console.error('Error fetching model files:', error);
//       }
//     };
//     fetchModelFiles();
//   }, []);
  
//   useEffect(() => {
//     const initializeViewer = () => {
//       const parentDiv = document.getElementById('viewer-container');
  
//       if (!parentDiv) {
//         console.error('Viewer container not found');
//         return;
//       }
  
//       OV.SetExternalLibLocation('/libs');
  
//       const viewer = new OV.EmbeddedViewer(parentDiv, {
//         camera: new OV.Camera(
//           new OV.Coord3D(0, -50, 160),  // Initial camera position
//           new OV.Coord3D(0, 80, 0),  // Camera target position
//           new OV.Coord3D(0, 1, 0),  // Up direction
  
//           45.0
//         ),
//         backgroundColor: new OV.RGBAColor(255, 255, 255, 255),
//         defaultColor: new OV.RGBColor(200, 200, 200),
//         edgeSettings: new OV.EdgeSettings(false, new OV.RGBColor(0, 0, 0), 1),
//         environmentSettings: new OV.EnvironmentSettings(
//           [
//             '/envmaps/fishermans_bastion/posx.jpg',
//             '/envmaps/fishermans_bastion/negx.jpg',
//             '/envmaps/fishermans_bastion/posy.jpg',
//             '/envmaps/fishermans_bastion/negy.jpg',
//             '/envmaps/fishermans_bastion/posz.jpg',
//             '/envmaps/fishermans_bastion/negz.jpg'
//           ],
//           false
//         )
//       });
  
//       // Load models dynamically based on their extensions
//         const folderName = 
//         userEmail === 'user1@gmail.com' ? 'HOHOU00677_OBJ' :
//         userEmail === 'user2@gmail.com' ? 'DCWDC00317A_OBJ' :
//         userEmail === 'user3@gmail.com' ? 'HOHOU00800_OBJ' : 
//         null; // or some default if needed
      
//       if (!folderName) {
//         console.error('No folder found for the given email.');
//         return; // Optionally handle the case where the folder does not exist
//       }
//       const modelUrls = modelFiles.map(file => `/${folderName}/Data/${file}`);
//       viewer.LoadModelFromUrlList(modelUrls);
  
//       // Adjust view after models are loaded
//       viewer.LoadingCompletedCallback = () => {
//         // If the library has a method to fit the view or center the model, use it here
//         if (viewer.FitToView) {
//           viewer.FitToView(); // This method might be different; check documentation
//         }
  
//         // Example: set a new camera position if FitToView is not available
//         viewer.SetCameraPosition(new OV.Coord3D(0, 0, 5));
//         viewer.SetCameraTarget(new OV.Coord3D(0, 0, 0));
//         viewer.SetCameraUp(new OV.Coord3D(0, 1, 0));
  
//         // Animate camera transition if supported
//         // Example: viewer.AnimateCamera(new OV.CameraAnimation(0.5, 2.0)); // Adjust method names based on documentation
//       };
//     };
  
//     if (modelFiles.length) {
//       initializeViewer();
//     }
//   }, [modelFiles]);
//   return (
//     <div>
      
//       <div id="viewer-container" style={{ height: '500px', width: '100%' ,backgroundColor: 'burlywood' }} className="border-2" ></div>
//     </div>
//   )
// }

// export default App