import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Appointment from "./components/dashboard/dashPages/Appointment";
import Sidebar from "./components/dashboard/global/Sidebar";
import Body from "./components/dashboard/dashPages/Body";

interface Prop {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: Prop) => (
  <div className="flex min-h-screen bg-gray-50">
    <Sidebar />
    <div className="flex-1">
      {/* <SaHeader /> */}
      <main>{children}</main>
    </div>
  </div>
);

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="">
     
          <Routes>
          <Route path="/" element={<Home />} /> 
           
            <Route
              path="/dashboard"
              element={<DashboardLayout children={<Body />} />}
            />

            <Route
              path="/appointment"
              element={<DashboardLayout children={<Appointment />} />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
