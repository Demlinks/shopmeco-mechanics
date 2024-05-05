import React from "react";
import { DashboardLineOne, TotalServices } from "../../assets/images/Dashboard";

const Dashboard = () => {
  return (
    <div className="Dashboard">
      <div className="DashboardContainerOne">
        <div className="text-lg leading-[21.7px] md:text-[26px] md:leading-[31.47px] font-semibold mb-4 md:mb-5 lg:mb-6 xl:mb-[30px]">
          Dashboard
        </div>
        <div className="flex flex-col lg:flex-row -mx-[10px]">
          <div className="DashboardStats">
            <div className="flex flex-row items-center lg:items-start lg:flex-col mr-[10px] xs:mr-3">
              <div className="p-2 md:p-[13px] mr-[10px] xs:mr-3 md:mr-0 mb-0 md:mb-[15px] rounded-full bg-white">
                <img
                  src={TotalServices}
                  alt="TotalServices"
                  className="w-full h-auto max-w-6 object-center"
                />
              </div>
              <div className="my-auto">
                <div className="font-Inter font-semibold text-lg leading-[21.78px] md:text-2xl lg:text-[28px] xl:text-[32px] md:leading-[38.73px] mb-1 md:mb-[5px]">
                  110
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
          <div className="DashboardStats">
            <div className="flex flex-row items-center lg:items-start lg:flex-col mr-[10px] xs:mr-3">
              <div className="p-2 md:p-[13px] mr-[10px] xs:mr-3 md:mr-0 mb-0 md:mb-[15px] rounded-full bg-white">
                <img
                  src={TotalServices}
                  alt="TotalServices"
                  className="w-full h-auto max-w-6 object-center"
                />
              </div>
              <div className="my-auto">
                <div className="font-Inter font-semibold text-lg leading-[21.78px] md:text-2xl lg:text-[28px] xl:text-[32px] md:leading-[38.73px] mb-1 md:mb-[5px]">
                  110
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
          <div className="DashboardStats">
            <div className="flex flex-row items-center lg:items-start lg:flex-col mr-[10px] xs:mr-3">
              <div className="p-2 md:p-[13px] mr-[10px] xs:mr-3 md:mr-0 mb-0 md:mb-[15px] rounded-full bg-white">
                <img
                  src={TotalServices}
                  alt="TotalServices"
                  className="w-full h-auto max-w-6 object-center"
                />
              </div>
              <div className="my-auto">
                <div className="font-Inter font-semibold text-lg leading-[21.78px] md:text-2xl lg:text-[28px] xl:text-[32px] md:leading-[38.73px] mb-1 md:mb-[5px]">
                  110
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
        </div>
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Dashboard;
