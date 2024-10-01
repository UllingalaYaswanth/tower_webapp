import React, { useState, useEffect } from "react";
import {
  Typography,
  Card,
  CardBody,
} from "@material-tailwind/react";
import towerImage from './img/tower.png';
import layout from './img/layout.png';
import swing from './img/swing.png';
import mount from './img/mount.png'
import mount1 from './img/mountssector.png'
import * as OV from 'online-3d-viewer';
import ThreeDModel from "@/ThreeDModel";

export function Tower({ goBack }) {

  const objFilePath = '/DamagedHelmet.glb';
  const userEmail = localStorage.getItem('userEmail');
  console.log('User email:', userEmail);

  // const [modelFiles, setModelFiles] = useState([]);

  // useEffect(() => {
  //   const fetchModelFiles = async () => {
  //     try {
  //       const response = await fetch(`http://localhost:8084/api/models?email=${userEmail}`);
  //       const files = await response.json();
  //       setModelFiles(files);
  //     } catch (error) {
  //       console.error('Error fetching model files:', error);
  //     }
  //   };
  //   fetchModelFiles();
  // }, [userEmail]); // Add userEmail as a dependency

  // useEffect(() => {
  //   const initializeViewer = () => {
  //     const parentDiv = document.getElementById('viewer-container');

  //     if (!parentDiv) {
  //       console.error('Viewer container not found');
  //       return;
  //     }

  //     // Debugging: Check the OV object
  //     console.log('OV object:', OV);

  //     // Temporarily comment this out for debugging
  //     // OV.SetExternalLibLocation('/libs');

  //     const viewer = new OV.EmbeddedViewer(parentDiv, {
  //       camera: new OV.Camera(
  //         new OV.Coord3D(0, -50, 160),  // Initial camera position
  //         new OV.Coord3D(0, 80, 0),     // Camera target position
  //         new OV.Coord3D(0, 1, 0),      // Up direction
  //         45.0
  //       ),
  //       backgroundColor: new OV.RGBAColor(255, 255, 255, 255),
  //       defaultColor: new OV.RGBColor(200, 200, 200),
  //       edgeSettings: new OV.EdgeSettings(false, new OV.RGBColor(0, 0, 0), 1),
  //       environmentSettings: new OV.EnvironmentSettings(
  //         [
  //           '/envmaps/fishermans_bastion/posx.jpg',
  //           '/envmaps/fishermans_bastion/negx.jpg',
  //           '/envmaps/fishermans_bastion/posy.jpg',
  //           '/envmaps/fishermans_bastion/negy.jpg',
  //           '/envmaps/fishermans_bastion/posz.jpg',
  //           '/envmaps/fishermans_bastion/negz.jpg'
  //         ],
  //         false
  //       )
  //     });

  //     // Load models dynamically based on their email-specific folder
  //     const folderName = 
  //       userEmail === 'user1@gmail.com' ? 'DADAL00398B_OBJ' :
  //       userEmail === 'user2@gmail.com' ? '1' :
  //       userEmail === 'user3@gmail.com' ? '2' : 
  //       null;

  //     if (!folderName) {
  //       console.error('No folder found for the given email.');
  //       return;
  //     }

  //     const modelUrls = modelFiles.map(file => `/${folderName}/Data/${file}`);
  //     viewer.LoadModelFromUrlList(modelUrls);

  //     viewer.LoadingCompletedCallback = () => {
  //       if (viewer.FitToView) {
  //         viewer.FitToView();
  //       } else {
  //         viewer.SetCameraPosition(new OV.Coord3D(0, 0, 5));
  //         viewer.SetCameraTarget(new OV.Coord3D(0, 0, 0));
  //         viewer.SetCameraUp(new OV.Coord3D(0, 1, 0));
  //       }
  //     };
  //   };

  //   if (modelFiles.length) {
  //     initializeViewer();
  //   }
  // }, [modelFiles]);



  const layoutdesign = [
    { p1: 'A1', type: 'Antenna' , Qty: '1' ,Manf: 'COMMSCOPE' , Model: 'FFVV-65B-R2' , RD: '100' , AZ: '0' , MT: '0.0' },
    { p1: 'B1', type: 'Antenna' , Qty: '1' ,Manf: 'COMMSCOPE' , Model: 'FFVV-65B-R2' , RD: '100' , AZ: '120' , MT: '0.0' },
    { p1: 'C1', type: 'Antenna' , Qty: '1' ,Manf: 'COMMSCOPE' , Model: 'FFVV-65B-R2' , RD: '100' , AZ: '240' , MT: '0.0' },
    { p1: 'A1', type: 'RRH' , Qty: '1' ,Manf: 'FUJITSU' , Model: 'TA8085-B605' ,  },
    { p1: 'A1', type: 'RRH' , Qty: '1' ,Manf: 'FUJITSU' , Model: 'TA8085-B605' ,  },
    { p1: 'B1', type: 'RRH' , Qty: '1' ,Manf: 'FUJITSU' , Model: 'TA8085-B605' ,  },
    { p1: 'B1', type: 'RRH' , Qty: '1' ,Manf: 'FUJITSU' , Model: 'TA8085-B605' , },
    { p1: 'C1', type: 'RRH' , Qty: '1' ,Manf: 'FUJITSU' , Model: 'TA8085-B605' ,  },
    { p1: 'C1', type: 'RRH' , Qty: '1' ,Manf: 'FUJITSU' , Model: 'TA8085-B605' ,  },
    {  type: 'OVO' , Qty: '1' ,Manf: 'RAYCAP' , Model: 'FFVV-65B-R2' ,  }
  ]

  const Asdesign = [
    { p1: 'A2', type: 'Antenna' , Qty: '1' ,Manf: 'COMMSCOPE' , Model: 'FFVV-65B-R2' , RD: '100' , AZ: '40' , MT: '0.3' },
    { p1: 'B2', type: 'Antenna' , Qty: '1' ,Manf: 'COMMSCOPE' , Model: 'FFVV-65B-R2' , RD: '100' , AZ: '141' , MT: '0.7' },
    { p1: 'C2', type: 'Antenna' , Qty: '1' ,Manf: 'COMMSCOPE' , Model: 'FFVV-65B-R2' , RD: '100' , AZ: '262' , MT: '0.4' },
    { p1: 'A2', type: 'RRH' , Qty: '1' ,Manf: 'FUJITSU' , Model: 'TA8085-B605' ,  },
    { p1: 'A2', type: 'RRH' , Qty: '1' ,Manf: 'FUJITSU' , Model: 'TA8085-B605' ,  },
    { p1: 'B2', type: 'RRH' , Qty: '1' ,Manf: 'FUJITSU' , Model: 'TA8085-B605' ,  },
    { p1: 'B2', type: 'RRH' , Qty: '1' ,Manf: 'FUJITSU' , Model: 'TA8085-B605' , },
    { p1: 'C2', type: 'RRH' , Qty: '1' ,Manf: 'FUJITSU' , Model: 'TA8085-B605' ,  },
    { p1: 'C2', type: 'RRH' , Qty: '1' ,Manf: 'FUJITSU' , Model: 'TA8085-B605' ,  },
    {  type: 'OVO' , Qty: '1' ,Manf: 'RAYCAP' , Model: 'FFVV-65B-R2' ,  }
  ]

  const swingdesign = [
    { p: 'A2', RC: '100', Az: '20', MAz: '22', Sk: '-2', ASA: '-34', ASN: '37' },
    { p: 'B2', RC: '100', Az: '141', MAz: '140', Sk: '1', ASA: '-35', ASN: '32' },
    { p: 'C2', RC: '100', Az: '262', MAz: '262', Sk: '0', ASA: '-33', ASN: '32' },
  ]

  const msA = [
    {mark : 'P1', type: 'Pipe' , size: '2.8 " OD', len: '8.0'},
    {mark : 'P2', type: 'Pipe' , size: '2 " OD', len: '8.0'},
    {mark : 'P3', type: 'Pipe' , size: '2.8 " OD', len: '8.0'},
  ]

  const Dim = [
    { mark: 'A', Dim: '1.9'},
    { mark: 'B', Dim: '2.1'},
    { mark: 'C', Dim: '2.2'},
    { mark: 'D', Dim: '3.0'},
    { mark: 'E', Dim: '2.2'},
    { mark: 'F', Dim: '3.5'},
  ]

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
              <Typography variant="body2">ABC</Typography>
            </CardBody>
          </Card>
          <Card>
            <CardBody className="text-center">
              <Typography variant="h6">SCAN DATE</Typography>
              <Typography variant="body2">11/29/2022</Typography>
            </CardBody>
          </Card>
          <Card>
            <CardBody className="text-center">
              <Typography variant="h6">MOUNT LEVEL</Typography>
              <Typography variant="body2">224 FT</Typography>
            </CardBody>
          </Card>
          <Card>
            <CardBody className="text-center">
              <Typography variant="h6">REPORT VERSION</Typography>
              <Typography variant="body2">02.2024</Typography>
            </CardBody>
          </Card>
        </div>

        <div className="mb-8">
          <Typography variant="h4" className="mb-4">
            CONSTRUCTION DIAGRAMS
          </Typography>
          <Card className="p-4 h-auto grid md:grid-cols-2 gap-5">
          <div className="border-2 p-3">
            <ThreeDModel objPath={objFilePath} />
          </div>
             <div className=" border-2 p-3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d9540.195161595973!2d83.31283792915833!3d17.733152090034732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDQzJzUzLjciTiA4M8KwMTknMDYuOSJF!5e1!3m2!1sen!2sin!4v1726925463570!5m2!1sen!2sin"
                width="100%"
                height="370"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
              ></iframe>
            </div>
          </Card>
        </div>
        <div className="mb-8">
          <Typography variant="h4" className="mb-4">
            ANTENNA LAYOUT
          </Typography>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card className="p-4 h-auto">
              <Typography variant="h6" className="text-center text-red-400">Antenna Layout ( Design )</Typography>
              <img src={towerImage} className="w-[50%] mx-auto my-3"></img>
              <table className="mt-4">
                <thead>
                    <tr className="bg-gray-100 text-xs">
                      <th className="border border-gray-300 px-2">Position</th>
                      <th className="border border-gray-300 ">Type</th>
                      <th className="border border-gray-300 ">Qty.</th>
                      <th className="border border-gray-300 ">Manufacturer</th>
                      <th className="border border-gray-300 ">Model No.</th>
                      <th className="border border-gray-300 ">Rad Center (ft)</th>
                      <th className="border border-gray-300 ">Azimuth (deg)</th>
                      <th className="border border-gray-300 ">Position (deg)</th>
                    </tr>
                </thead>
                <tbody>
                  {
                    layoutdesign.map((item,index) => (
                      <tr key={index} className="text-sm">
                        <td className="border border-gray-300 px-4">{item.p1 || '-'}</td>
                        <td className="border border-gray-300 px-4">{item.type}</td>
                        <td className="border border-gray-300 px-4">{item.Qty}</td>
                        <td className="border border-gray-300 px-4">{item.Manf}</td>
                        <td className="border border-gray-300 px-4">{item.Model}</td>
                        <td className="border border-gray-300 px-4">{item.RD || '-'}</td>
                        <td className="border border-gray-300 px-4">{item.AZ || '-'}</td>
                        <td className="border border-gray-300 px-4">{item.MT || '-'}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </Card>
            <Card className="p-4 h-auto">
              <Typography variant="h6" className="text-center text-red-400">Antenna Layout ( As-Build )</Typography>
              <img src={layout} className="w-[50%] mx-auto my-3"></img>
              <table className="mt-4">
                <thead>
                    <tr className="bg-gray-100 text-xs">
                      <th className="border border-gray-300 px-2">Position</th>
                      <th className="border border-gray-300 ">Type</th>
                      <th className="border border-gray-300 ">Qty.</th>
                      <th className="border border-gray-300 ">Manufacturer</th>
                      <th className="border border-gray-300 ">Model No.</th>
                      <th className="border border-gray-300 ">Rad Center (ft)</th>
                      <th className="border border-gray-300 ">Azimuth (deg)</th>
                      <th className="border border-gray-300 ">Position (deg)</th>
                    </tr>
                </thead>
                <tbody>
                  {
                    Asdesign.map((item,index) => (
                      <tr key={index} className="text-sm">
                        <td className="border border-gray-300 px-4">{item.p1 || '-'}</td>
                        <td className="border border-gray-300 px-4">{item.type}</td>
                        <td className="border border-gray-300 px-4">{item.Qty}</td>
                        <td className="border border-gray-300 px-4">{item.Manf}</td>
                        <td className="border border-gray-300 px-4">{item.Model}</td>
                        <td className="border border-gray-300 px-4">{item.RD || '-'}</td>
                        <td className="border border-gray-300 px-4">{item.AZ || '-'}</td>
                        <td className="border border-gray-300 px-4">{item.MT || '-'}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>

            </Card>
          </div>
        </div>

        <div className="mb-8">
          <Typography variant="h4" className="mb-4">
            ANTENNA SWING
          </Typography>
          <Card className="p-4 h-auto grid md:grid-cols-2">
            <img src= {swing} className="w-[60%]"></img>     
            <div>
              <h1 className="text-center text-2xl font-semibold">Antenna Swing Limit</h1>
            <table className="mt-8">
                <thead>
                    <tr className="bg-gray-100 text-sm">
                      <th className="border border-gray-300 px-2">Position</th>
                      <th className="border border-gray-300 ">Rad Center (ft)</th>
                      <th className="border border-gray-300 ">Azimuth (deg)</th>
                      <th className="border border-gray-300 ">Mount Azimuth (deg)</th>
                      <th className="border border-gray-300 ">Skew (deg)</th>
                      <th className="border border-gray-300 ">Ant Swing Angle (-deg)</th>
                      <th className="border border-gray-300 ">Ant Swing Angle (+deg)</th>
                    </tr>
                </thead>
                <tbody>
                  {
                    swingdesign.map((item,index) => (
                      <tr key={index} className="text-sm">
                        <td className="border border-gray-300 px-4">{item.p || '-'}</td>
                        <td className="border border-gray-300 px-4">{item.RC}</td>
                        <td className="border border-gray-300 px-4">{item.Az}</td>
                        <td className="border border-gray-300 px-4">{item.MAz}</td>
                        <td className="border border-gray-300 px-4">{item.Sk}</td>
                        <td className="border border-gray-300 px-4">{item.ASA || '-'}</td>
                        <td className="border border-gray-300 px-4">{item.ASN || '-'}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
              <h1 className='mt-10 text-md font-semibold'>Minimum Swing Angle Tolerance =    20 degree</h1>
              <h1 className="mt-5 text-sm text-red-400">* If available Swing Angle is less then " Minimum Swing Angle Tolerance" in either direction, cell will be highlighted in "RED"</h1>
            </div> 
          </Card>
        </div>
        
        <Typography variant="h2" className="mb-8">
          MOUNTS
        </Typography>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
          <Card>
            <CardBody className="text-center">
              <Typography variant="h6">SITE ID</Typography>
              <Typography variant="body2">ABC</Typography>
            </CardBody>
          </Card>
          <Card>
            <CardBody className="text-center">
              <Typography variant="h6">SCAN DATE</Typography>
              <Typography variant="body2">11/29/2022</Typography>
            </CardBody>
          </Card>
        </div>

        <div className="mb-8">

          <div className="my-5">
            <Card className="p-5 grid md:grid-cols-2">
              <img src={mount} className="w-[50%] mx-auto rounded-md"></img>
              <img src={mount1} className="w-[50%] mx-auto"></img>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
            <Card className="p-4 h-auto">
            <Typography variant="h6" className="text-red-400">Sector A</Typography>
              <Typography variant="h6" className="text-sm mt-3">Member Schedule</Typography>
              <table className="mt-3">
                <thead>
                    <tr className="bg-gray-100 text-sm">
                      <th className="border border-gray-300 px-2">Mark</th>
                      <th className="border border-gray-300 ">Type</th>
                      <th className="border border-gray-300 ">Size</th>
                      <th className="border border-gray-300 ">Length (ft)</th>
                    </tr>
                </thead>
                <tbody>
                  {
                    msA.map((item,index) => (
                      <tr key={index} className="text-sm text-center">
                        <td className="border border-gray-300 px-4">{item.mark || '-'}</td>
                        <td className="border border-gray-300 px-4">{item.type}</td>
                        <td className="border border-gray-300 px-4">{item.size || '-'}</td>
                        <td className="border border-gray-300 px-4">{item.len}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
              <Typography variant="h6" className="text-sm mt-4">Dimensions</Typography>
              <table className="mt-3 w-[75%]">
                <thead>
                    <tr className="bg-gray-100 text-sm">
                      <th className="border border-gray-300 px-2">Mark</th>
                      <th className="border border-gray-300 ">Dim (ft)</th>
                    </tr>
                </thead>
                <tbody>
                  {
                    Dim.map((item,index) => (
                      <tr key={index} className="text-sm text-center">
                        <td className="border border-gray-300 px-4">{item.mark || '-'}</td>
                        <td className="border border-gray-300 px-4">{item.Dim}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </Card>
            <Card className="p-4 h-auto">
            <Typography variant="h6" className="text-red-400">Sector B</Typography>
              <Typography variant="h6" className="text-sm mt-3">Member Schedule</Typography>
              <table className="mt-3">
                <thead>
                    <tr className="bg-gray-100 text-sm">
                      <th className="border border-gray-300 px-2">Mark</th>
                      <th className="border border-gray-300 ">Type</th>
                      <th className="border border-gray-300 ">Size</th>
                      <th className="border border-gray-300 ">Length (ft)</th>
                    </tr>
                </thead>
                <tbody>
                  {
                    msA.map((item,index) => (
                      <tr key={index} className="text-sm text-center">
                        <td className="border border-gray-300 px-4">{item.mark || '-'}</td>
                        <td className="border border-gray-300 px-4">{item.type}</td>
                        <td className="border border-gray-300 px-4">{item.size || '-'}</td>
                        <td className="border border-gray-300 px-4">{item.len}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
              <Typography variant="h6" className="text-sm mt-4">Dimensions</Typography>
              <table className="mt-3 w-[75%]">
                <thead>
                    <tr className="bg-gray-100 text-sm">
                      <th className="border border-gray-300 px-2">Mark</th>
                      <th className="border border-gray-300 ">Dim (ft)</th>
                    </tr>
                </thead>
                <tbody>
                  {
                    Dim.map((item,index) => (
                      <tr key={index} className="text-sm text-center">
                        <td className="border border-gray-300 px-4">{item.mark || '-'}</td>
                        <td className="border border-gray-300 px-4">{item.Dim}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </Card>
            <Card className="p-4 h-auto">
            <Typography variant="h6" className="text-red-400">Sector C</Typography>
              <Typography variant="h6" className="text-sm mt-3">Member Schedule</Typography>
              <table className="mt-3">
                <thead>
                    <tr className="bg-gray-100 text-sm">
                      <th className="border border-gray-300 px-2">Mark</th>
                      <th className="border border-gray-300 ">Type</th>
                      <th className="border border-gray-300 ">Size</th>
                      <th className="border border-gray-300 ">Length (ft)</th>
                    </tr>
                </thead>
                <tbody>
                  {
                    msA.map((item,index) => (
                      <tr key={index} className="text-sm text-center">
                        <td className="border border-gray-300 px-4">{item.mark || '-'}</td>
                        <td className="border border-gray-300 px-4">{item.type}</td>
                        <td className="border border-gray-300 px-4">{item.size || '-'}</td>
                        <td className="border border-gray-300 px-4">{item.len}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
              <Typography variant="h6" className="text-sm mt-4">Dimensions</Typography>
              <table className="mt-3 w-[75%]">
                <thead>
                    <tr className="bg-gray-100 text-sm">
                      <th className="border border-gray-300 px-2">Mark</th>
                      <th className="border border-gray-300 ">Dim (ft)</th>
                    </tr>
                </thead>
                <tbody>
                  {
                    Dim.map((item,index) => (
                      <tr key={index} className="text-sm text-center">
                        <td className="border border-gray-300 px-4">{item.mark || '-'}</td>
                        <td className="border border-gray-300 px-4">{item.Dim}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tower;