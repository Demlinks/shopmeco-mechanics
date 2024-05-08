import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import { useState } from "react";

const DashboardLayout = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="DashboardLayout">
      <Navbar toggle={toggle} setToggle={setToggle} />
      <div className="block w-full min-h-[calc(100vh-73px)] md:min-h-[calc(100vh-75px)] lg:min-h-[calc(100vh-83px)] xl:min-h-[calc(100vh-93px)] md:ml-[23%] lg:ml-[19.5%] xl:ml-[18%] mt-[73px] md:mt-[75px] lg:mt-[83px] xl:mt-[93px]">
        <Header setToggle={setToggle} />
        <div className="my-[27px] mx-[16px] md:m-10 lg:m-11 xl:m-[50px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
