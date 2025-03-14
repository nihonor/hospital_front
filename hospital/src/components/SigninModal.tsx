import React from "react";
import doc from "../assets/girl.png";

interface SigninModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const SigninModal: React.FC<SigninModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ">
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
          <div className=" mb-6 flex justify-between">
            <div></div>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 "
            >
              ✕
            </button>
          </div>
          <h2 className="text-2xl font-semibold flex justify-center py-3">
            Sign in For account
          </h2>

          <form className="space-y-6 flex flex-col items-center justify-center max-w-sm mx-auto">
            <div className="w-full space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter Your email Address"
                  className="w-full px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-pr-color rounded-lg bg-input-color"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  placeholder="Your Password"
                  className="w-full px-4 py-2 rounded-lg bg-input-color border focus:outline-none focus:ring-2 focus:ring-pr-color"
                />
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
                className="w-full bg-pr-color text-white py-3 rounded-full hover:bg-pr-color/80 transition-colors"
              >
                Sign in
              </button>

              <p className="text-center text-gray-600">
                Don't have account?{" "}
                <a href="#" className="text-pr-color">
                  Signup
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SigninModal;
