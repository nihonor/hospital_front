import React, { useState } from "react";
// import image from "../../../assets/girl.png";
// import tick from "../../../assets/Vector.svg";
// import cross from "../../../assets/Vecto.svg"

const AppointmentRequests = () => {
  const requests = [
    {
      name: "Shyam Khanna",
      disease: "Heart Disease",
      date: "01/27",
      approved: true,
    },
    {
      name: "Jean Lee Un",
      disease: "Heart Disease",
      date: "01/27",
      approved: false,
    },
    {
      name: "Clara Brook",
      disease: "Heart Disease",
      date: "01/27",
      approved: true,
    },
    {
      name: "John Doe",
      disease: "Heart Disease",
      date: "01/27",
      approved: false,
    },
    {
      name: "Jane Smith",
      disease: "Heart Disease",
      date: "01/27",
      approved: true,
    },
  ];

  const [visibleCount, setVisibleCount] = useState(3);

  const handleSeeMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md w-full overflow-x-auto">
      <h2 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">
        Appointment requests
      </h2>
      <div className="min-w-[600px]">
        <table className="w-full">
          <thead>
            <tr className="text-xs">
              <th className="w-10 sm:w-12"></th>
              <th className="py-2 px-2 sm:px-10 text-left font-semibold text-gray-700">
                Name
              </th>
              <th className="py-2 px-2 sm:px-10 text-left font-semibold text-gray-700">
                Disease
              </th>
              <th className="py-2 px-2 sm:px-10 text-left font-semibold text-gray-700">
                Date
              </th>
              <th className="py-2 px-2 sm:px-6 text-center font-semibold text-gray-700">
                Approval
              </th>
            </tr>
          </thead>
          <tbody>
            {requests.slice(0, visibleCount).map((request, index) => (
              <tr key={index} className="hover:bg-gray-100 transition text-xs">
                <td className="py-1">
                  <img
                    // src={image}
                    alt="Profile"
                    className="h-8 w-8 sm:h-10 sm:w-10 rounded-full object-cover"
                  />
                </td>
                <td className="py-1 px-2 sm:px-4 text-pr-color font-medium">
                  {request.name}
                </td>
                <td className="py-1 px-2 sm:px-4 text-pr-color text-center font-semibold">
                  {request.disease}
                </td>
                <td className="py-1 px-2 sm:px-4 text-pr-color text-center font-semibold">
                  {request.date}
                </td>
                <td className="py-1 px-2 sm:px-4 text-center">
                  {request.approved ? (
                    <button className="text-green-500">✓</button>
                  ) : (
                    <button className="text-red-500">✗</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {visibleCount < requests.length && (
        <div className="mt-2 text-right">
          <button
            onClick={handleSeeMore}
            className="text-blue-600 hover:underline font-medium"
          >
            See more
          </button>
        </div>
      )}
    </div>
  );
};

export default AppointmentRequests;
