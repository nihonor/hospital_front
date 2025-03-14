import React, { useState } from "react";
import doc from "../assets/girl.png";

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignupModal: React.FC<SignupModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-3xl   max-w-screen-xl w-full mx-4 flex h-[670px]">
        {/* Left side - Image */}
        <div className="hidden md:block w-1/2 bg-pr-color p-8 text-white rounded-s-2xl">
          <div className="h-full flex items-center justify-center pt-8">
            <img src={doc} alt="doctors" />
            {/* Add your doctor image here */}
          </div>
        </div>

        {/* Right side - Form */}
        <div className="w-full md:w-1/2 md:pl-8 p-8 ">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Sign up For account</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>

          <form className="space-y-4  md:mr-32">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-2">First Name</label>
                <input
                  type="text"
                  placeholder="Your First Name"
                  className="w-full px-4 py-2  border focus:outline-none focus:ring-2 focus:ring-pr-color rounded-lg bg-input-color"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Last Name</label>
                <input
                  type="text"
                  placeholder="Your Last Name"
                  className="w-full px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-pr-color rounded-lg bg-input-color"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                placeholder="Enter Your email Address"
                className="w-full px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-pr-color rounded-lg bg-input-color"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  placeholder="Your Password"
                  className="w-full px-4 py-2 rounded-lg bg-input-color border focus:outline-none focus:ring-2 focus:ring-pr-color"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="Confirm Your Password"
                  className="w-full px-4 py-2  border focus:outline-none focus:ring-2 focus:ring-pr-color rounded-lg bg-input-color"
                />
              </div>
            </div>

            <div className="flex items-center">
              <input type="checkbox" id="terms" className="mr-2" />
              <label htmlFor="terms">
                I accept all{" "}
                <span className="text-pr-color">terms and condition</span>
              </label>
            </div>

            <button
              type="submit"
              className="w-1/2 mx-auto bg-pr-color text-white py-2 rounded-full hover:bg-pr-color/80 transition-colors flex justify-center"
            >
              Sign Up
            </button>

            <p className="text-center text-gray-600">
              Already have an account?{" "}
              <a href="#" className="text-pr-color">
                Log In
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;
