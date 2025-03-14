import React from 'react';

const DoctorTable = () => {
  // Step 1: Define the doctors array
  const doctors = [
    {
      name: "Dr. Robert Henry",
      specialty: "Cardiologist",
      rating: 4.5,
      reviewCount: 102,
    },
    {
      name: "Dr. Sarah Smith",
      specialty: "Dermatologist",
      rating: 4.8,
      reviewCount: 85,
    },
    {
      name: "Dr. John Doe",
      specialty: "Pediatrician",
      rating: 4.7,
      reviewCount: 90,
    },
    // Add more doctors as needed
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Specialty</th>
            <th className="py-2 px-4 border-b">Rating</th>
            <th className="py-2 px-4 border-b">Reviews</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">{doctor.name}</td>
              <td className="py-2 px-4 border-b">{doctor.specialty}</td>
              <td className="py-2 px-4 border-b">{doctor.rating}</td>
              <td className="py-2 px-4 border-b">{doctor.reviewCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DoctorTable;