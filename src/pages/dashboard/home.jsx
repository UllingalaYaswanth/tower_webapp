import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import {
  Typography,
  Card,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";

import {
  BanknotesIcon,
  UserGroupIcon,
  DocumentTextIcon,
  FlagIcon,
} from "@heroicons/react/24/outline";

import { StatisticsCard } from "@/widgets/cards"; // Assuming this import is correct

export function Home() {
  const [documents, setDocuments] = useState([]); // State to hold documents data
  const navigate = useNavigate();

  useEffect(() => {
    // Simulated API call to fetch documents data
    const fetchDocuments = async () => {
      // Simulated data for testing purposes
      const mockDocuments = [
        { name: "ABC", uploaded: "03-05-2024", statusProcess: "Processing", lastMaintainDate: "2023-06-15" },
        { name: "XYZ", uploaded: "04-05-2024", statusProcess: "Completed", lastMaintainDate: "2023-07-01" },
        { name: "A1B1C1", uploaded: "03-05-2024", statusProcess: "Processing", lastMaintainDate: "2023-06-15" },
      ];
      setDocuments(mockDocuments);
    };

    fetchDocuments();
  }, []); // Empty dependency array ensures it runs only once on mount

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  return (
    <div className="mt-12">
      <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
        <StatisticsCard
          title="Total Sites"
          icon={<BanknotesIcon className="w-6 h-6 text-white" />}
          value={3} // Use documents state to get the count of documents
          color="gray"
        />
        <StatisticsCard
          title="OBJ"
          icon={<UserGroupIcon className="w-6 h-6 text-white" />}
          value={3} // Placeholder value, replace with actual data
          color="gray"
        />
        <StatisticsCard
          title="LAZ"
          icon={<DocumentTextIcon className="w-6 h-6 text-white" />}
          value={3} // Placeholder value, replace with actual data
          color="gray"
        />
        <StatisticsCard
          title="KML"
          icon={<FlagIcon className="w-6 h-6 text-white" />}
          value={3} // Placeholder value, replace with actual data
          color="gray"
        />
      </div>

      <div className="mb-4 mt-12 grid grid-cols-1 gap-5 xl:grid-cols-1">
        <Card className="overflow-hidden">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 flex items-center justify-between p-6"
          >
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-1">
                Recent Uploads
              </Typography>
            </div>
          </CardHeader>
          <CardBody className="overflow-x-auto max-h-[400px] overflow-y-scroll px-0 pt-0 pb-2">
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
                        className="text-[11px] font-medium font-bold uppercase text-blue-gray-400"
                      >
                        {el}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {documents.map(({ name, uploaded, statusProcess, lastMaintainDate }, key) => (
                  <tr key={key}>
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
    </div>
  );
}

export default Home;