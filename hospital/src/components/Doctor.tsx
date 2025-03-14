import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

interface DoctorProps {
  name: string;
  specialty: string;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  isAvailable?: boolean;
}

const Doctor: React.FC<DoctorProps> = ({
  name,
  specialty,
  rating,
  reviewCount,
  imageUrl,
  isAvailable = true,
}) => {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg w-full max-w-sm mx-auto ">
      {/* Available Badge */}
      {isAvailable && (
        <div className="mb-4">
          <span className="bg-gray-100 text-gray-600 text-sm px-3 py-1 rounded-full">
            Available
          </span>
        </div>
      )}

      {/* Doctor Image */}
      <div className="flex justify-center ">
      
        <img src={imageUrl} alt={name} className="w-52 flex justify-center h-full object-cover " />
    
      </div>
     

      {/* Doctor Info */}
      
      <div className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800 flex justify-center">{name}</h2>
        <p className="text['#767676']  flex justify-center">{specialty}</p>

        {/* Rating */}
        <div className="flex items-center gap-1 justify-center">
          {[...Array(5)].map((_, index) => {
            if (index + 1 <= rating) {
              return <FaStar key={index} className="text-pr-color" />;
            } else if (index + 0.5 <= rating) {
              return <FaStarHalfAlt key={index} className="text-pr-color" />;
            } else {
              return <FaStar key={index} className="text-gray-300" />;
            }
          })}
          <span className="text-gray-600">({reviewCount})</span>
        </div>

        {/* Book Button */}
        <button className="w-full py-3 px-4 bg-white border-2 border-pr-color text-pr-color rounded-full hover:bg-pr-color hover:text-white transition-colors">
          Book an Appointment
        </button>
      </div>
    </div>
  );
};

export default Doctor;
