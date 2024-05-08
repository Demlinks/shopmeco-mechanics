import React, { useState } from "react";
import BookingListingDesktop from "./Components/BookingListingDesktop";
import BookingListingMobile from "./Components/BookingListingMobile";
import { Search } from "../../assets/images";
import { Dropdown } from "../../assets/images/Booking";

const Booking = () => {
  const [bookingSort, setBookingSort] = useState("Booking status");
  return (
    <div className="Booking">
      <div className="text-lg leading-[21.7px] md:text-[26px] md:leading-[31.47px] font-semibold mb-[19px] md:mb-[27px] lg:mb-[36px] xl:mb-[47px]">
        Booking
      </div>
      <div className="mb-3 md:mb-3 lg:mb-4 xl:mb-5 flex flex-row justify-between">
        <div className="Booking-Search">
          <div className="static md:absolute left-[10px] top-[7px] bottom-[7px] min-w-[24px] h-6 m-[7px] md:m-0">
            <img
              src={Search}
              alt="Search"
              className="size-full object-center"
            />
          </div>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search services by name..."
            className="hidden md:block pl-[44px] py-[9px] pr-[9px] text-[rgba(170,_168,_168,_1)] text-sm h-full w-[275px] md:w-[240px]  lg:w-[300px] xl:w-[360px] rounded-lg font-Poppins"
          />
        </div>
        <div className="flex flex-row font-medium text-sm leading-[22px] text-[rgba(40,_40,_40,_1)]">
          <div className="self-center mr-[10px]">Sort by: </div>
          <button className="bg-white flex flex-row items-center justify-between px-3 lg:px-[15px] rounded-[5px] border border-[rgba(212,_204,_255,_1)] md:border-transparent border-solid cursor-pointer">
            <div className="w-[95px] sm:w-[161px] md:w-[140px] lg:w-[181px] mr-[10px]">{bookingSort}</div>
            <div className="w-[17.11px] h-[11px]"><img src={Dropdown} alt="dropdown" className="size-full object-center" /></div>
          </button>
        </div>
      </div>
      <div className="BookingLog">
        <BookingListingDesktop />
        <BookingListingMobile />
      </div>
    </div>
  );
};

export default Booking;
