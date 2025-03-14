import React, { useState } from "react";
import { FaMicroscope, FaAmbulance } from "react-icons/fa";
import { FaBookBookmark } from "react-icons/fa6";
import Service from "../components/Service";
import { PiAlignCenterHorizontal } from "react-icons/pi";
import Doctor from "../components/Doctor";
import doctor from "../assets/girl.png";
import Testimonial from "../components/Testomonial";
import Article from "../components/Article";
import gym from "../assets/gym.jpg";
import NewsletterForm from "../components/NewsletterForm";
import SignupModal from "../components/SignupModal";
import SigninModal from "../components/SigninModal";

const Home: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const initialCount = 4;
  const expandedCount = 8;
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isSigninOpen, setIsSigninOpen] = useState(false);
  const testimonials = [
    {
      name: "John Doe",
      role: "Patient",
      comment: "Amazing service and care from all the staff",
      rating: 4.5,
    },
    {
      name: "Jane Smith",
      role: "Patient",
      comment: "Excellent facilities and professional staff",
      rating: 5,
    },
    {
      name: "Mike Johnson",
      role: "Patient",
      comment: "Great experience with caring doctors",
      rating: 4.5,
    },
    {
      name: "Sarah Wilson",
      role: "Patient",
      comment: "Top-notch medical care and attention",
      rating: 5,
    },
    // Add more testimonials as needed
  ];

  const toggleDoctors = () => {
    setIsExpanded(!isExpanded);
  };

  const doctors = Array(isExpanded ? expandedCount : initialCount).fill({
    name: "Dr. Robert Henry",
    specialty: "Cardiologist",
    rating: 4.5,
    reviewCount: 102,
    imageUrl: doctor,
    isAvailable: true,
  });

  const handleSlide = (direction: "prev" | "next") => {
    if (isAnimating) return; // Prevent rapid clicking

    setIsAnimating(true);
    if (direction === "prev") {
      setCurrentTestimonial((curr) =>
        curr === 0 ? testimonials.length - 3 : curr - 1
      );
    } else {
      setCurrentTestimonial((curr) =>
        curr === testimonials.length - 3 ? 0 : curr + 1
      );
    }

    // Reset animation lock after transition
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8 ">
        <nav className="flex flex-col md:flex-row items-center justify-between mb-12 space-y-4 md:space-y-0">
          <div className="flex items-center">
            <span className="text-pr-color font-bold text-xl">Hospital</span>
            <span className="text-gray-400 ml-1">logo</span>
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
              <a
                href="#"
                className="text-gray-700 hover:text-pr-color transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-pr-color transition-colors"
              >
                Services
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-pr-color transition-colors"
              >
                Doctors
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-pr-color transition-colors"
              >
                About us
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-pr-color transition-colors"
              >
                Contact us
              </a>
            </div>
            <div className="flex space-x-4">
              <button
                className="bg-pr-color text-white px-6 py-2 rounded-full hover:bg-pr-color/80 transition-colors"
                onClick={() => setIsSigninOpen(true)}
              >
                Sign in
              </button>
              <button
                onClick={() => setIsSignupOpen(true)}
                className="border-2 border-pr-color text-pr-color px-6 py-2 rounded-full hover:bg-pr-color hover:text-white transition-colors"
              >
                Sign up
              </button>
            </div>
          </div>
        </nav>

        <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 ">
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-pr-color">We care</span>
              <br />
              about your health
            </h1>
            <p className="text-gray-500 mb-8 text-base md:text-lg">
              Good health is the state of mental, physical and social well being
              <br className="hidden md:block" />
              and it does not just mean absence of diseases.
            </p>
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <button className="w-full sm:w-auto bg-pr-color text-white px-8 py-3 rounded-full flex items-center justify-center hover:bg-pr-color/80 transition-colors">
                Book an appointment
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
              <button className="w-full sm:w-auto flex items-center justify-center text-gray-700 hover:text-pr-color transition-colors">
                <span className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-gray-300 mr-2">
                  ▶
                </span>
                Watch videos
              </button>
            </div>
            <p className="text-gray-600 text-center sm:text-left">
              Become member of our hospital community?
              <a href="#" className="text-pr-color ml-1 hover:underline">
                Sign up
              </a>
            </p>
          </div>

          <div className="w-full md:w-1/2 relative h-[300px] md:h-[500px] flex items-center justify-center">
            <div className=" md:h-[500px] md:w-[500px]">
              <div className="bg-pr-color rounded-full w-[300px] h-[300px] md:w-[350px] md:h-[350px] absolute right-1/2 transform translate-x-1/2 md:right-0 md:translate-x-0  border-red-600"></div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-2xl shadow-lg p-4 md:p-6 max-w-4xl mx-auto">
          <h3 className="text-gray-700 mb-6 text-lg font-medium">
            Find a doctor
          </h3>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="text"
              placeholder="Name of Doctor"
              className="w-full md:w-64 border rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-pr-color transition-shadow"
            />
            <input
              type="text"
              placeholder="Speciality"
              className="w-full md:w-64 border rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-pr-color transition-shadow"
            />
            <div className="flex items-center space-x-2">
              <span className="text-gray-600">Availability</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div
                  className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer 
                              peer-checked:after:translate-x-full peer-checked:after:border-white 
                              after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
                              after:bg-white after:border after:rounded-full after:h-5 after:w-5 
                              after:transition-all peer-checked:bg-pr-color"
                ></div>
              </label>
            </div>
            <button className="w-full md:w-auto bg-pr-color text-white px-8 py-3 rounded-full hover:bg-pr-color/80 transition-colors">
              Search
            </button>
          </div>
        </div>
        <div className="flex justify-center pt-20 pb-4">
          <div>
            <h1 className="text-4xl font-semiboldd">Our Medical Service</h1>
            <p className="flex flex-col items-center pt-4 text-lg text-sub-color">
              <span>We are dedicated to serve you</span>
              <span>best medical services</span>
            </p>
          </div>
        </div>

        <div className="fixed bottom-8 right-8 bg-pr-color text-white px-4 py-2 rounded-full shadow-lg flex items-center space-x-2">
          <span>Contact no</span>
          <span className="font-medium">+971523871925</span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6  max-w-6xl mx-auto place-items-center">
        <Service
          icon={<FaMicroscope />}
          text="Well equipped lab"
          bgColor="bg-white"
          desColor="text-txt-color"
          iconColor="text-pr-color"
        />
        <Service
          icon={<FaAmbulance />}
          text="Well equipped lab"
          bgColor="bg-pr-color"
          desColor="text-white"
          iconColor="text-white"
        />
        <Service
          icon={<FaBookBookmark />}
          text="Well equipped lab"
          bgColor="bg-white"
          desColor="text-txt-color"
          iconColor="text-pr-color"
        />
        <Service
          icon={<PiAlignCenterHorizontal />}
          text="Well equipped lab"
          bgColor="bg-white"
          desColor="text-txt-color"
          iconColor="text-pr-color"
        />
      </div>

      <div>
        <div className="flex justify-center pt-20 pb-4">
          <div>
            <h1 className="text-4xl font-semibold flex justify-center">
              Meet Our Doctors
            </h1>
            <p className="flex flex-col items-center pt-4 text-lg text-sub-color">
              <span>Well qualified doctors are ready to serve you</span>
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto px-8 py-6 place-items-center">
          {doctors.map((doc, index) => (
            <Doctor
              key={index}
              name={doc.name}
              specialty={doc.specialty}
              rating={doc.rating}
              reviewCount={doc.reviewCount}
              imageUrl={doc.imageUrl}
              isAvailable={doc.isAvailable}
            />
          ))}
        </div>
      </div>
      {/* Toggle Button */}
      <div className="flex justify-center mt-8 mb-12">
        <button
          onClick={toggleDoctors}
          className="px-8 py-3 bg-pr-color text-white rounded-lg hover:bg-pr-color/80 transition-colors flex items-center gap-2"
        >
          {isExpanded ? "Show Less" : "See more"}
          <span className="text-xl">{isExpanded ? "↑" : "↓"}</span>
        </button>
      </div>
      <div className="flex justify-center pt-20 pb-4">
        <div>
          <h1 className="text-4xl font-semibold flex justify-center">
            Patients Test
          </h1>
          <p className="flex flex-col items-center pt-4 text-lg text-sub-color">
            <span>Well qualified doctors are ready to serve you</span>
          </p>
        </div>
      </div>
      <div className="flex justify-center overflow-hidden">
        <div className="flex items-center gap-8 relative">
          <button
            className="p-2 rounded-full bg-pr-color text-white hover:bg-pr-color/80 transition-colors z-10"
            onClick={() => handleSlide("prev")}
            disabled={isAnimating}
          >
            ←
          </button>

          <div
            className="flex gap-8 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentTestimonial * (100 / 3)}%)`,
            }}
          >
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div key={index} className="min-w-[300px]">
                <Testimonial
                  name={testimonial.name}
                  role={testimonial.role}
                  comment={testimonial.comment}
                  rating={testimonial.rating}
                />
              </div>
            ))}
          </div>

          <button
            className="p-2 rounded-full bg-pr-color text-white hover:bg-pr-color/80 transition-colors z-10"
            onClick={() => handleSlide("next")}
            disabled={isAnimating}
          >
            →
          </button>
        </div>
      </div>
      <div className="flex justify-center pt-20 pb-4">
        <div>
          <h1 className="text-4xl font-semibold flex justify-center">
            Our Latest Article
          </h1>
          <p className="flex flex-col items-center pt-4 text-lg text-sub-color">
            <span>Written by our experts</span>
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="md:grid grid-cols-2 gap-0 max-w-screen-lg">
          <div>
            <Article
              title={"Card title"}
              description={
                "Card desription. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit rhoncus imperdiet nisi."
              }
              imageUrl={gym}
              height="h-96"
              display="grid grid-col-1"
              imageWidth="w-96"
              imageHeight="h-44"
            />
          </div>
          <div>
            <Article
              title={"Card title"}
              description={
                "Card desription. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit rhoncus imperdiet nisi."
              }
              imageUrl={gym}
            />
            <Article
              title={"Card title"}
              description={
                "Card desription. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit rhoncus imperdiet nisi."
              }
              imageUrl={gym}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-20 pb-4">
        <div>
          <h1 className="text-4xl font-semibold flex justify-center">
            Subscribe To Our Newsletter
          </h1>
          <p className="flex flex-col items-center pt-4 text-lg text-sub-color">
            <span>Get latest news of our hospital</span>
          </p>
        </div>
      </div>
      <NewsletterForm />

      <SignupModal
        isOpen={isSignupOpen}
        onClose={() => setIsSignupOpen(false)}
      />
      <SigninModal
        isOpen={isSigninOpen}
        onClose={() => setIsSigninOpen(false)}
      />
    </div>
  );
};

export default Home;
