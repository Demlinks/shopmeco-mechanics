import React from "react";
import {
  DashboardLineOne,
  DashboardLineThree,
  DashboardLineTwo,
  TotalResquests,
  TotalServices,
  UnreadMessages,
} from "../../assets/images/Dashboard";
import BookingListing from "./Components/BookingListing";
import { BookingData } from "../../Data/Dummy Data/db";
import { Link } from "react-router-dom";

const Dashboard = ({
  totalServices = 110,
  totalRequests = BookingData.length,
  unreadMessages = 30,
}) => {
  return (
    <div className="Dashboard">
      <div className="DashboardContainerOne">
        <div className="text-lg leading-[21.7px] md:text-[26px] md:leading-[31.47px] font-semibold mb-4 md:mb-5 lg:mb-6 xl:mb-[30px]">
          Dashboard
        </div>
        <div className="flex flex-col md:flex-row md:-mx-[10px]">
          <div className="DashboardStats bg-[rgba(255,_225,_229,_1)]">
            <div className="flex flex-row items-center md:items-center lg:items-start md:flex-col mr-[10px] xs:mr-3 md:mr-0 lg:mr-3">
              <div className="p-2 md:p-[13px] mr-[10px] xs:mr-3 md:mr-0 mb-0 md:mb-[15px] rounded-full bg-white">
                <img
                  src={TotalServices}
                  alt="TotalServices"
                  className="w-full h-auto max-w-6 object-center"
                />
              </div>
              <div className="my-auto text-left md:text-center lg:text-left">
                <div className="font-Inter font-semibold text-lg leading-[21.78px] md:text-2xl lg:text-[28px] xl:text-[32px] md:leading-[38.73px] mb-1 md:mb-[5px]">
                  {totalServices}
                </div>
                <div className="font-Poppins font-medium text-sm leading-[19.06px] md:text-base lg:text-lg md:leading-[24.74px] text-[rgba(170,_168,_168,_1)]">
                  Total Services
                </div>
              </div>
            </div>
            <div className="my-auto block md:hidden lg:block">
              <img
                src={DashboardLineOne}
                alt="DashboardStatOne"
                className="w-full h-[40px] md:h-auto max-w-[68.64px] md:max-w-[79px] lg:max-w-[90px] xl:max-w-[103.61px] object-center"
              />
            </div>
          </div>
          <div className="DashboardStats bg-[rgba(233,_226,_251,_1)]">
            <div className="flex flex-row items-center md:items-center lg:items-start md:flex-col mr-[10px] xs:mr-3 md:mr-0 lg:mr-3">
              <div className="p-2 md:p-[13px] mr-[10px] xs:mr-3 md:mr-0 mb-0 md:mb-[15px] rounded-full bg-white">
                <img
                  src={TotalResquests}
                  alt="totalRequests"
                  className="w-full h-auto max-w-6 object-center"
                />
              </div>
              <div className="my-auto text-left md:text-center lg:text-left">
                <div className="font-Inter font-semibold text-lg leading-[21.78px] md:text-2xl lg:text-[28px] xl:text-[32px] md:leading-[38.73px] mb-1 md:mb-[5px]">
                  {totalRequests}
                </div>
                <div className="font-Poppins font-medium text-sm leading-[19.06px] md:text-base lg:text-lg md:leading-[24.74px] text-[rgba(170,_168,_168,_1)]">
                  Total Requests
                </div>
              </div>
            </div>
            <div className="my-auto block md:hidden lg:block">
              <img
                src={DashboardLineTwo}
                alt="DashboardStatTwo"
                className="w-full h-[40px] md:h-auto max-w-[68.64px] md:max-w-[79px] lg:max-w-[90px] xl:max-w-[103.61px] object-center"
              />
            </div>
          </div>
          <div className="DashboardStats bg-[rgba(255,_238,_214,_1)]">
            <div className="flex flex-row items-center md:items-center lg:items-start md:flex-col mr-[10px] xs:mr-3 md:mr-0 xl:mr-0">
              <div className="p-2 md:p-[13px] mr-[10px] xs:mr-3 md:mr-0 mb-0 md:mb-[15px] rounded-full bg-white">
                <img
                  src={UnreadMessages}
                  alt="UnreadMessages"
                  className="w-full h-auto max-w-6 object-center"
                />
              </div>
              <div className="my-auto text-left md:text-center lg:text-left">
                <div className="font-Inter font-semibold text-lg leading-[21.78px] md:text-2xl lg:text-[28px] xl:text-[32px] md:leading-[38.73px] mb-1 md:mb-[5px]">
                  {unreadMessages}
                </div>
                <div className="font-Poppins font-medium text-sm leading-[19.06px] md:text-base lg:text-lg md:leading-[24.74px] text-[rgba(170,_168,_168,_1)]">
                  Unread Messages
                </div>
              </div>
            </div>
            <div className="my-auto block md:hidden lg:block">
              <img
                src={DashboardLineThree}
                alt="DashboardStatThree"
                className="w-full h-[40px] md:h-auto max-w-[68.64px] md:max-w-[79px] lg:max-w-[90px] xl:max-w-[103.61px] object-center"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="DashboardLatestReq">
        <div className="flex flex-row justify-between mb-4 md:mb-[21px] lg:mb-[26px] xl:mb-[30px]">
          <div className="text-sm md:text-lg lg:text-xl font-semibold font-Inter">
            Latest Requests
          </div>
          <Link
            to="booking"
            className="text-sm md:text-base font-semibold text-[rgba(80,_7,_224,_1)]"
          >
            <span className=" font-Poppins no-underline md:underline mr-1 md:mr-[5px]">
              See All
            </span>
            <span className="text-lg my-auto">{">"}</span>
          </Link>
        </div>
        <div>
          <BookingListing isHome={true} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
