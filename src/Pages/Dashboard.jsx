import React from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Orders from "../Components/Orders";

const Dashboard = () => {
  return (
    <div style={{ height: "100vh" }} className="bg- ">
      <Navbar />
      <div className="d-flex py-2 ">
        <Sidebar />
        <div className="col flex-grow-1 px-2">
          <Orders />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
