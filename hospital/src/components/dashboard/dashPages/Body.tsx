import React from "react";
import { FaUserCheck, FaCheck, FaTimes } from "react-icons/fa";
import { RiMedalFill } from "react-icons/ri";
import MostVisitedClients from "../../MostVisitedClients";
import DoctorTable from "./DoctorTable";
import Appointment from "./Appointment";
import AppointmentTable from "./AppointmentTable";
import ChartComponent from "./ChartComponent";

const Body = () => {
  return (
    <div className="px-16  my-8">
      
      <div>
        <h1 className="text-lg">
          Welcome,
          <span className="font-bold text-pr-color font-mono">
            D.HONORE Niyitanga
          </span>
        </h1>
        <div className="flex space-x-7 py-10">
          <div className="h-16 w-52 rounded-xl  shadow-xl flex justify-evenly items-center">
            <div className="text-pr-color">
              <FaUserCheck size={28} />
            </div>
            <div>
              <h1 className="text-xl font-bold">3000</h1>
              <p className="text-sm">Patients Treated</p>
            </div>
          </div>
          <div className="h-16 w-52 rounded-xl  shadow-xl flex justify-evenly items-center">
            <div className="text-pr-color">
              <RiMedalFill size={28} />
            </div>
            <div>
              <h1 className="text-xl font-bold">Ratings</h1>
              <p className="text-sm">Ratings</p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex justify-evenly">
        <div>
          {" "}
          <div>
            <AppointmentTable />
          </div>
          <div className="pt-4">
            {" "}
            <ChartComponent />
          </div>
        </div>
        <div>
          <div>
            {" "}
            <MostVisitedClients />
          </div>
          <div className="pt-4">
            {" "}
            <MostVisitedClients />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
