import React from 'react';
import { FaStarHalfAlt } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';

interface TestimonialProps {
  name: string;
  role: string;
  comment: string;
  rating: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ name, role, comment, rating }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 w-80">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 bg-pr-color rounded-full flex items-center justify-center">
          <div className="w-14 h-14 bg-white rounded-full"></div>
        </div>
        <div>
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-gray-600 text-xs font-semibold">{role}</p>
          <div className="flex items-center gap-1 py-3">
          {[...Array(5)].map((_, index) => {
            if (index + 1 <= rating) {
              return <FaStar key={index} className="text-pr-color" />;
            } else if (index + 0.5 <= rating) {
              return <FaStarHalfAlt key={index} className="text-pr-color" />;
            } else {
              return <FaStar key={index} className="text-gray-300" />;
            }
          })}
          
        </div>
      <p className="text-gray-700 text-xs">{comment}</p>
        </div>
      </div>
     
    </div>
  );
};

export default Testimonial;
