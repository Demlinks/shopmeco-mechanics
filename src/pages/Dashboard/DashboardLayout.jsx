import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import { useState } from "react";

const DashboardLayout = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="DashboardLayout">
      <Navbar toggle={toggle} setToggle={setToggle}/>
      <div className="min-h-screen basis-full md:basis-[85%] lg:basis-[82%]">
        <Header setToggle={setToggle}/>
        <div className="my-[27px] mx-[16px] md:m-10 lg:m-11 xl:m-[50px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
