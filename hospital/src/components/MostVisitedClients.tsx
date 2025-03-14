import React from "react";
import girl from "../assets/girl.png";
const MostVisitedClients = () => {
  const clients = [
    {
      name: "Shyam Khanna",
      disease: "Heart Disease",
      visits: 27,
      image: { girl },
    },
    {
      name: "James Cleaveland",
      disease: "Heart Disease",
      visits: 22,
      image: { girl },
    },
    {
      name: "Tyler Johnson",
      disease: "Heart Disease",
      visits: 18,
      image: { girl },
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg mx-auto">
      <h2 className="text-xl font-bold text-gray-800 mb-3">
        Most visited clients
      </h2>
      <table className="w-full">
        <thead>
          <tr className="text-gray-500 text-xs font-semibold">
            <th className="text-left py-2">Name</th>
            <th className="text-left py-2">Disease</th>
            <th className="text-left py-2">Visited</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client, index) => (
            <tr
              key={index}
              className="bg-gray-50 hover:bg-gray-100 rounded-lg transition-all mb-1 text-xs"
            >
              <td className="py-3 px-4 flex items-center">
                <img
                  // src={client.image}
                  // alt={client.name}
                  src={girl}
                  className="w-5 h-5 rounded-full object-cover mr-4"
                />
                <span className="text-blue-600 font-medium">{client.name}</span>
              </td>
              <td className="py-1 px-4 text-gray-600">{client.disease}</td>
              <td className="py-1 px-4 text-gray-800">{client.visits} times</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-3 text-right">
        <a
          href="#"
          className="text-blue-500 hover:underline font-medium text-sm"
        >
          See more
        </a>
      </div>
    </div>
  );
};

export default MostVisitedClients;
