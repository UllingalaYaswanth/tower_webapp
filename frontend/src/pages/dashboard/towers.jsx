import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";
import Tower from './tower'; // Import the Tower component

export function Towers() {
  const [documents, setDocuments] = useState([]); // State to hold documents data
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTower, setSelectedTower] = useState(null); // State to track selected tower
  const navigate = useNavigate();

  useEffect(() => {
    // Simulated API call to fetch documents data
    const fetchDocuments = async () => {
      // Simulated data for testing purposes
      const mockDocuments = [
        { name: "ATATL00143A", uploaded: "03-05-2024", statusProcess: "Processing", lastMaintainDate: "2023-06-15" },
        { name: "STSTL00223B", uploaded: "04-05-2024", statusProcess: "Completed", lastMaintainDate: "2023-07-01" },
        { name: "ATATL00143A", uploaded: "03-05-2024", statusProcess: "Processing", lastMaintainDate: "2023-06-15" },
        { name: "STSTL00223B", uploaded: "04-05-2024", statusProcess: "Completed", lastMaintainDate: "2023-07-01" },
        { name: "ATATL00143A", uploaded: "03-05-2024", statusProcess: "Processing", lastMaintainDate: "2023-06-15" },
        { name: "STSTL00223B", uploaded: "04-05-2024", statusProcess: "Completed", lastMaintainDate: "2023-07-01" },
        { name: "ATATL00143A", uploaded: "03-05-2024", statusProcess: "Processing", lastMaintainDate: "2023-06-15" },
        { name: "STSTL00223B", uploaded: "04-05-2024", statusProcess: "Completed", lastMaintainDate: "2023-07-01" },
        { name: "ATATL00143A", uploaded: "03-05-2024", statusProcess: "Processing", lastMaintainDate: "2023-06-15" },
        { name: "STSTL00223B", uploaded: "04-05-2024", statusProcess: "Completed", lastMaintainDate: "2023-07-01" },
        { name: "ATATL00143A", uploaded: "03-05-2024", statusProcess: "Processing", lastMaintainDate: "2023-06-15" },
        { name: "STSTL00223B", uploaded: "04-05-2024", statusProcess: "Completed", lastMaintainDate: "2023-07-01" }
      ];
      setDocuments(mockDocuments);
    };

    fetchDocuments();
  }, []); // Empty dependency array ensures it runs only once on mount

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  const handleTowerClick = (towerName) => {
    setSelectedTower(towerName);
  };

  const goBack = () => {
    setSelectedTower(null);
  };

  const filteredDocuments = documents.filter(document =>
    document.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    document.uploaded.toLowerCase().includes(searchQuery.toLowerCase()) ||
    document.statusProcess.toLowerCase().includes(searchQuery.toLowerCase()) ||
    document.lastMaintainDate.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="mt-12">
      {!selectedTower ? (
        <div className="mb-4 mt-12 grid grid-cols-1 gap-5 xl:grid-cols-1">
          <Card className="overflow-hidden">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 flex items-center justify-between p-6"
            >
              <div className="flex items-end gap-4">
                <Typography variant="h6" color="blue-gray" className="mb-1">
                  Towers
                </Typography>
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="border border-gray-300 rounded-md py-1 px-4"
                />
              </div>
            </CardHeader>
            <CardBody className="overflow-x-auto max-h-[750px] overflow-y-scroll px-0 pt-0 pb-2">
              <table className="w-full min-w-[640px] table-auto">
                <thead>
                  <tr className="items-center">
                    {["Site Names", "Uploaded", "Status Process", "Last Maintained"].map((el, index) => (
                      <th
                        key={index}
                        className="border-b border-blue-gray-50 py-3 px-6 text-left"
                      >
                        <Typography
                          variant="small"
                          className="text-[11px] font-medium uppercase text-blue-gray-400"
                        >
                          {el}
                        </Typography>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filteredDocuments.map(({ name, uploaded, statusProcess, lastMaintainDate }, key) => (
                    <tr key={key} onClick={() => handleTowerClick(name)} className="cursor-pointer">
                      <td className="py-3 px-5 border-b border-blue-gray-50">
                        <Typography
                          variant="small"
                          className="text-xs font-medium text-blue-gray-600"
                        >
                          {name}
                        </Typography>
                      </td>
                      <td className="py-3 px-5 border-b border-blue-gray-50">
                        <Typography
                          variant="small"
                          className="text-xs font-medium text-blue-gray-600"
                        >
                          {uploaded}
                        </Typography>
                      </td>
                      <td className="py-3 px-5 border-b border-blue-gray-50">
                        <Typography
                          variant="small"
                          className="text-xs font-medium text-blue-gray-600"
                        >
                          {statusProcess}
                        </Typography>
                      </td>
                      <td className="py-3 px-5 border-b border-blue-gray-50">
                        <Typography
                          variant="small"
                          className="text-xs font-medium text-blue-gray-600"
                        >
                          {formatDate(lastMaintainDate)}
                        </Typography>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardBody>
          </Card>
        </div>
      ) : (
        <Tower goBack={goBack} />
      )}
    </div>
  );
}

export default Towers;
