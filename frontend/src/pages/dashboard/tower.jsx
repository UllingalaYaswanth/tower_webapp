// import React, { useState, useEffect } from "react";
// import {
//   Typography,
//   Card,
//   CardHeader,
//   CardBody,
// } from "@material-tailwind/react";

// export function Tower() {


//   return (
//     <div className="mt-12">
//       <div className="mt-10 p-8">
//       <Typography variant="h2" className="mb-8">
//         TOWER DETAILS
//       </Typography>
//       <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-8">
//         <Card>
//           <CardBody className="text-center">
//             <Typography variant="h6">SITE ID</Typography>
//             <Typography variant="body2">ATATL00413</Typography>
//           </CardBody>
//         </Card>
//         <Card>
//           <CardBody className="text-center">
//             <Typography variant="h6">SCAN DATE</Typography>
//             <Typography variant="body2">13-05-2024</Typography>
//           </CardBody>
//         </Card>
//         <Card>
//           <CardBody className="text-center">
//             <Typography variant="h6">MOUNT LEVEL</Typography>
//             <Typography variant="body2">ft</Typography>
//           </CardBody>
//         </Card>
//         <Card>
//           <CardBody className="text-center">
//             <Typography variant="h6">REPORT VERSION</Typography>
//             <Typography variant="body2">6.21</Typography>
//           </CardBody>
//         </Card>
//       </div>

//       <div className="mb-8">
//         <Typography variant="h4" className="mb-4">
//           CONSTRUCTION DIAGRAMS
//         </Typography>
//         <Card className="p-4 h-80 flex items-center justify-center">
//           <Typography variant="body1" className="text-gray-500">
//           </Typography>
//         </Card>
//       </div>
//       <div className="mb-8">
//           <Typography variant="h4" className="mb-4">
//             ANTENNA LAYOUT
//           </Typography>
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
//             <Card className="p-4 h-40">
//               <Typography variant="h6">Design</Typography>
//             </Card>
//             <Card className="p-4 h-40">
//               <Typography variant="h6">As-Built</Typography>
//             </Card>
//           </div>
//         </div>
//         <div className="mb-8">
//           <Typography variant="h4" className="mb-4">
//             ANTENNA SWING
//           </Typography>
//           <div className="grid grid-cols-1 lg:grid-cols-1 gap-4">
//             <Card className="p-4 h-40">
//               <Typography variant="h6">Antenna Swing Limit (Minimum Swing Angle Tolerance = degrees)</Typography>
//             </Card>
//           </div>
//         </div>
//         <Typography variant="h2" className="mb-8">
//           MOUNTS
//         </Typography>
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
//         <Card>
//           <CardBody className="text-center">
//             <Typography variant="h6">SITE ID</Typography>
//             <Typography variant="body2">ATATL00413</Typography>
//           </CardBody>
//         </Card>
//         <Card>
//           <CardBody className="text-center">
//             <Typography variant="h6">SCAN DATE</Typography>
//             <Typography variant="body2">13-05-2024</Typography>
//           </CardBody>
//         </Card>
//       </div>
//       <div className="mb-8">
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
//             <Card className="p-4 h-40">
//               <Typography variant="h6">Member Schedule(Sector A)</Typography>
//             </Card>
//             <Card className="p-4 h-40">
//               <Typography variant="h6">Member Schedule(Sector B)</Typography>
//             </Card>
//             <Card className="p-4 h-40">
//               <Typography variant="h6">Member Schedule(Sector C)</Typography>
//             </Card>
//             <Card className="p-4 h-40">
//               <Typography variant="h6">Dimensions(Sector A)</Typography>
//             </Card>
//             <Card className="p-4 h-40">
//               <Typography variant="h6">Dimensions(Sector B)</Typography>
//             </Card>
//             <Card className="p-4 h-40">
//               <Typography variant="h6">Dimensions(Sector C)</Typography>
//             </Card>
//           </div>
//         </div>
//     </div>
//     </div>
//   );
// }

// export default Tower;

import React from "react";
import {
  Typography,
  Card,
  CardBody,
} from "@material-tailwind/react";

export function Tower({ goBack }) {
  return (
    <div className="mt-12">
      <div className="mt-10 p-8">
        <button
          onClick={goBack}
          className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Back
        </button>
        <Typography variant="h2" className="mb-8">
          TOWER DETAILS
        </Typography>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardBody className="text-center">
              <Typography variant="h6">SITE ID</Typography>
              <Typography variant="body2">ATATL00413</Typography>
            </CardBody>
          </Card>
          <Card>
            <CardBody className="text-center">
              <Typography variant="h6">SCAN DATE</Typography>
              <Typography variant="body2">13-05-2024</Typography>
            </CardBody>
          </Card>
          <Card>
            <CardBody className="text-center">
              <Typography variant="h6">MOUNT LEVEL</Typography>
              <Typography variant="body2">ft</Typography>
            </CardBody>
          </Card>
          <Card>
            <CardBody className="text-center">
              <Typography variant="h6">REPORT VERSION</Typography>
              <Typography variant="body2">6.21</Typography>
            </CardBody>
          </Card>
        </div>

        <div className="mb-8">
          <Typography variant="h4" className="mb-4">
            CONSTRUCTION DIAGRAMS
          </Typography>
          <Card className="p-4 h-80 flex items-center justify-center">
            <Typography variant="body1" className="text-gray-500">
            </Typography>
          </Card>
        </div>
        <div className="mb-8">
          <Typography variant="h4" className="mb-4">
            ANTENNA LAYOUT
          </Typography>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card className="p-4 h-40">
              <Typography variant="h6">Design</Typography>
            </Card>
            <Card className="p-4 h-40">
              <Typography variant="h6">As-Built</Typography>
            </Card>
          </div>
        </div>
        <div className="mb-8">
          <Typography variant="h4" className="mb-4">
            ANTENNA SWING
          </Typography>
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-4">
            <Card className="p-4 h-40">
              <Typography variant="h6">Antenna Swing Limit (Minimum Swing Angle Tolerance = degrees)</Typography>
            </Card>
          </div>
        </div>
        <Typography variant="h2" className="mb-8">
          MOUNTS
        </Typography>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
          <Card>
            <CardBody className="text-center">
              <Typography variant="h6">SITE ID</Typography>
              <Typography variant="body2">ATATL00413</Typography>
            </CardBody>
          </Card>
          <Card>
            <CardBody className="text-center">
              <Typography variant="h6">SCAN DATE</Typography>
              <Typography variant="body2">13-05-2024</Typography>
            </CardBody>
          </Card>
        </div>
        <div className="mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
            <Card className="p-4 h-40">
              <Typography variant="h6">Member Schedule(Sector A)</Typography>
            </Card>
            <Card className="p-4 h-40">
              <Typography variant="h6">Member Schedule(Sector B)</Typography>
            </Card>
            <Card className="p-4 h-40">
              <Typography variant="h6">Member Schedule(Sector C)</Typography>
            </Card>
            <Card className="p-4 h-40">
              <Typography variant="h6">Dimensions(Sector A)</Typography>
            </Card>
            <Card className="p-4 h-40">
              <Typography variant="h6">Dimensions(Sector B)</Typography>
            </Card>
            <Card className="p-4 h-40">
              <Typography variant="h6">Dimensions(Sector C)</Typography>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tower;
