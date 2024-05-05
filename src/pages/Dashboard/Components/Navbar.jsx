import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  CloseNav,
  Logo,
  MobileBG1,
  MobileBG2,
  MobileBGRect,
} from "../../../assets/images";
import { NavbarData } from "../../../Data/Constant Data";
import { useLocation } from "react-router-dom";
const Navbar = ({ toggle, setToggle }) => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  // console.log(location);

  // Preload active images
  useEffect(() => {
    NavbarData.forEach((navbar) => {
      const image = new Image();
      image.src = navbar.iconActive;
      // image.src = navbar.icon;
    });
  }, []);
  return (
    <div className={`Navbar ${toggle ? "flex md:flex" : "hidden md:flex"}`}>
      {/* Mobile Backgrounds */}
      <div className="absolute max-w-[226.04px] h-[345px] top-0 left-0 -z-20 block md:hidden">
        <img
          src={MobileBG1}
          alt="MobileBG1"
          className="size-full object-center"
        />
      </div>
      <div className="absolute max-w-[186.65px] h-[308px] bottom-0 right-0 -z-20 block md:hidden">
        <img
          src={MobileBG2}
          alt="MobileBG2"
          className="size-full object-center"
        />
      </div>
      <div className="absolute max-w-[188.34px] h-[307px] bottom-[20%] left-0 -z-20 block md:hidden">
        <img
          src={MobileBGRect}
          alt="MobileBG Rect"
          className="size-full object-center"
        />
      </div>

      {/* Normal Codes */}
      <div className="hidden md:block max-w-[140px] h-auto mt-[20px] lg:mt-[25px] xl:mt-[29px] mb-[12px] lg:mb-[14px] xl:mb-[15.6px]">
        <img src={Logo} alt="SHOPMECO" className="size-full object-center" />
      </div>
      <div
        className="block self-end md:hidden max-w-[32px] h-auto mt-[16px] mx-4 mb-[24px]"
        onClick={() => setToggle(false)}
      >
        <img
          src={CloseNav}
          alt="X"
          className="size-full object-center cursor-pointer"
        />
      </div>
      <div className=" h-[calc(100vh_-_136px)] md:h-full flex flex-col justify-between my-8 md:my-10 lg:my-12 xl:my-[60px] font-medium font-Poppins">
        <div>
          {NavbarData.slice(0, 4).map((navbar, index) => {
            return (
              <NavLink
                end
                to={navbar.link}
                key={index}
                className={({ isActive }) =>
                  isActive
                    ? "flex flex-row px-8 py-4 md:px-2 md:py-[7px] mb-2 lg:mb-3 xl:mb-4 2xl:mb-5 rounded-none md:rounded-md bg-[rgba(245,_243,_255,_1)] text-[rgba(31,_31,_31,_1)]  md:text-[rgba(80,_7,_224,_1)]"
                    : "flex flex-row px-8 py-4 md:px-2 md:py-[7px] mb-2 lg:mb-3 xl:mb-4 2xl:mb-5 rounded-none md:rounded-md bg-transparent text-[rgba(212,_204,_255,_1)] hover:bg-black/30"
                }
                onClick={() => setToggle(false)}
                // style={({ isActive }) => {
                //   return isActive
                //     ? { backgroundColor: "rgba(245, 243, 255, 1)" }
                //     : { backgroundColor: "transparent" };
                // }}
              >
                <div className="min-w-5 h-auto mr-2 hidden md:block">
                  <img
                    src={
                      splitLocation[splitLocation.length - 1] ===
                      navbar.iconActiveLink
                        ? navbar.iconActive
                        : navbar.icon
                    }
                    alt="icon"
                    className="size-full object-center"
                  />
                </div>
                <div className="md:text-base lg :md:text-lg">{navbar.name}</div>
              </NavLink>
            );
          })}
        </div>
        <div className="">
        {/* absolute bottom-0 w-full mb-12 md:mb-0 md:static */}
          {NavbarData.slice(4).map((navbar, index) => {
            return (
              <NavLink
                to={navbar.link}
                key={index}
                className={({ isActive }) =>
                  isActive
                    ? "flex flex-row px-8 py-4 md:px-2 md:py-[7px] mb-2 lg:mb-3 xl:mb-4 2xl:mb-5 rounded-none md:rounded-md bg-[rgba(245,_243,_255,_1)] text-[rgba(31,_31,_31,_1)]  md:text-[rgba(80,_7,_224,_1)]"
                    : "flex flex-row px-8 py-4 md:px-2 md:py-[7px] mb-2 lg:mb-3 xl:mb-4 2xl:mb-5 rounded-none md:rounded-md bg-transparent text-[rgba(212,_204,_255,_1)] hover:bg-black/30"
                }
                onClick={() => setToggle(false)}
                // style={({ isActive }) => {
                //   return isActive
                //     ? { backgroundColor: "black" }
                //     : { backgroundColor: "transparent" };
                // }}
              >
                <div className="min-w-5 h-auto mr-2 hidden md:block">
                  <img
                    src={
                      splitLocation[splitLocation.length - 1] ===
                      navbar.iconActiveLink
                        ? navbar.iconActive
                        : navbar.icon
                    }
                    alt="icon"
                    className="size-full object-center"
                  />
                </div>
                <div className="md:text-base lg :md:text-lg">{navbar.name}</div>
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
