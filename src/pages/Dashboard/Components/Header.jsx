import React from "react";
import { Bell, Logo, MenuHandler, NotificationSign, Search } from "../../../assets/images";
import { UserData } from "../../../Data/Dummy Data/db";

const Header = ({setToggle}) => {
  return (
    <div className="Header">
      <div className="flex flex-row md:hidden">
        <div className=" max-w-[24px] h-auto cursor-pointer" onClick={() => setToggle(true)}>
          <img src={MenuHandler} alt="☰" className="size-full object-center"/>
        </div>
        <div className="block md:hidden max-w-[142px] min-h-8 mx-6 cursor-pointer">
          <img src={Logo} alt="SHOPMECO" className="size-full object-center"/>
        </div>
      </div>
      <div className="Header-Search">
        <div className="absolute z-10 left-[10px] top-3 bottom-3 max-w-[24px] h-6">
          <img src={Search} alt="Search" className="size-full object-center" />
        </div>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search or type"
          className="pl-[39px] py-[10px] pr-[10px] border border-[rgba(212,_204,_255,_1)] md:w-[260px] lg:w-[360px] xl:w-[460px] border-solid rounded-lg font-Poppins"
        />
      </div>
      <div className="flex flex-row items-center">
        <div className="block md:hidden py-[4px] px-1 cursor-pointer">
          <div className="min-w-[16px] h-auto">
            <img
              src={Search}
              alt="Search"
              className="size-full object-center invert contrast-[200%]"
            />
          </div>
        </div>
        <div className=" relative py-[3px] px-1 mx-2 sm:mx-3 md:mx-[20px] cursor-pointer">
          <div className="max-w-[16px] h-auto ">
            <img src={Bell} alt="Bell" className="size-full object-center" />
          </div>
          <div className="absolute top-[2px] right-[2px] max-w-2">
            <img src={NotificationSign} alt="Sign" />
          </div>
        </div>
        <div className=" User-Details">
          {UserData.map((data, index) => {
            return (
              <div key={index} className="flex flex-row">
                <div className="max-w-[40px] h-auto rounded-full mr-0 md:mr-[10px]">
                  <img
                    src={data.image}
                    alt={data.name}
                    className="size-full object-center object-cover"
                  />
                </div>

                <div className="hidden md:block">
                  <div className="mb-[3px] text-[rgba(31,_31,_31,_1)] text-sm font-semibold font-Open-Sans">
                    {data.name}
                  </div>
                  <div className="text-[rgba(170,_168,_168,_1)] text-sm font-normal font-Poppins">
                    {data.role}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
