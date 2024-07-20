import React from "react";
import {
  Typography,
  Card,
  CardBody,
} from "@material-tailwind/react";
import towerImage from './img/tower.png';

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
          <Card className="p-4 h-80 flex items-center justify-center">
          <Card className="p-4 h-80 flex items-center justify-center">
          <img 
          src={towerImage} 
          alt="Construction Diagram" 
          className="max-h-full max-w-full object-contain"
        />
          </Card>
          </Card>
        </div>
        
        <div className="mb-8">
          <Typography variant="h4" className="mb-4">
            ANTENNA LAYOUT
          </Typography>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card className="p-4 h-40">
              <Typography variant="h6">Design</Typography>
              <Typography variant="body2">
                Manufacturer | Model No. | Rad Center (ft) | Azimuth (deg) | Mech Tilt (deg)
              </Typography>
              <Typography variant="body2">
                Antenna 1 | JMA | MX08FRO665-21 | 224 | 0 | 0.0
              </Typography>
              <Typography variant="body2">
                Antenna 1 | JMA | MX08FRO665-21 | 224 | 0 | 0.0
              </Typography>
            </Card>
            <Card className="p-4 h-40">
              <Typography variant="h6">As-Built</Typography>
              <Typography variant="body2">
                Manufacturer | Model No. | Rad Center (ft) | Azimuth (deg) | Mech Tilt (deg)
              </Typography>
              <Typography variant="body2">
                Antenna 1 | JMA | MX08FRO665-21 | 224 | 0 | 0.0
              </Typography>
              <Typography variant="body2">
                Antenna 1 | JMA | MX08FRO665-21 | 224 | 0 | 0.0
              </Typography>
            </Card>
          </div>
        </div>

        <div className="mb-8">
          <Typography variant="h4" className="mb-4">
            ANTENNA SWING
          </Typography>
          <Card className="p-4 h-50">
            <Typography variant="h6">
              Antenna Swing Limit (Minimum Swing Angle Tolerance = degrees)
            </Typography>
            <Typography variant="body2">
              Position | Rad Center (ft) | Azimuth (deg) | Mount Azimuth (deg) | Skew (deg) | Ant Swing Angle (- deg) | Ant Swing Angle (+ deg)
            </Typography>
            <Typography variant="body2">
              A2 | 224 | 0 | 352 | 8 | -37 | 21
            </Typography>
            <Typography variant="body2">
              A2 | 224 | 0 | 352 | 8 | -37 | 21
            </Typography>
            <Typography variant="body2">
              A2 | 224 | 0 | 352 | 8 | -37 | 21
            </Typography>
            <Typography variant="body2">
              Minimum Swing Angle Tolerance = 20 degrees
            </Typography>
          </Card>
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
              <Typography variant="body2">11/29/2022</Typography>
            </CardBody>
          </Card>
        </div>

        <div className="mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
            <Card className="p-4 h-40">
              <Typography variant="h6">Member Schedule (Sector A)</Typography>
              <Typography variant="body2">
                Mark | Type | Size | Length (ft)
              </Typography>
              <Typography variant="body2">
                P1 | Pipe | 2.8" OD | 10.0
              </Typography>
              <Typography variant="body2">
                P1 | Pipe | 2.8" OD | 10.0
              </Typography>
              <Typography variant="body2">
                P1 | Pipe | 2.8" OD | 10.0
              </Typography>
            </Card>
            <Card className="p-4 h-40">
              <Typography variant="h6">Member Schedule (Sector B)</Typography>
              <Typography variant="body2">
                Mark | Type | Size | Length (ft)
              </Typography>
              <Typography variant="body2">
                P1 | Pipe | 2.8" OD | 10.0
              </Typography>
              <Typography variant="body2">
                P1 | Pipe | 2.8" OD | 10.0
              </Typography>
              <Typography variant="body2">
                P1 | Pipe | 2.8" OD | 10.0
              </Typography>
            </Card>
            <Card className="p-4 h-40">
              <Typography variant="h6">Member Schedule (Sector C)</Typography>
              <Typography variant="body2">
                Mark | Type | Size | Length (ft)
              </Typography>
              <Typography variant="body2">
                P1 | Pipe | 2.8" OD | 10.0
              </Typography>
              <Typography variant="body2">
                P1 | Pipe | 2.8" OD | 10.0
              </Typography>
              <Typography variant="body2">
                P1 | Pipe | 2.8" OD | 10.0
              </Typography>
            </Card>
            <Card className="p-4 h-60">
              <Typography variant="h6">Dimensions (Sector A)</Typography>
              <Typography variant="body2">
                Mark | Dim (ft)
              </Typography>
              <Typography variant="body2">
                A | 3.5
              </Typography>
              <Typography variant="body2">
                B | 3.6
              </Typography>
              <Typography variant="body2">
                C | 4.1
              </Typography>
              <Typography variant="body2">
                D | 4.1
              </Typography>
              <Typography variant="body2">
                E | 4.1
              </Typography>
              <Typography variant="body2">
                F | 2.5
              </Typography>
            </Card>
            <Card className="p-4 h-60">
              <Typography variant="h6">Dimensions (Sector B)</Typography>
              <Typography variant="body2">
                Mark | Dim (ft)
              </Typography>
              <Typography variant="body2">
                A | 3.5
              </Typography>
              <Typography variant="body2">
                B | 3.6
              </Typography>
              <Typography variant="body2">
                C | 4.1
              </Typography>
              <Typography variant="body2">
                D | 4.1
              </Typography>
              <Typography variant="body2">
                E | 4.1
              </Typography>
              <Typography variant="body2">
                F | 2.5
              </Typography>
            </Card>
            <Card className="p-4 h-60">
              <Typography variant="h6">Dimensions (Sector C)</Typography>
              <Typography variant="body2">
                Mark | Dim (ft)
              </Typography>
              <Typography variant="body2">
                A | 3.5
              </Typography>
              <Typography variant="body2">
                B | 3.6
              </Typography>
              <Typography variant="body2">
                C | 4.1
              </Typography>
              <Typography variant="body2">
                D | 4.1
              </Typography>
              <Typography variant="body2">
                E | 4.1
              </Typography>
              <Typography variant="body2">
                F | 2.5
              </Typography>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tower;
