import React from "react";
import BookingListing from "./Components/BookingListing";

const Booking = () => {
  return (
    <div className="Booking">
      <div className="text-lg leading-[21.7px] md:text-[26px] md:leading-[31.47px] font-semibold mb-[19px] md:mb-[27px] lg:mb-[36px] xl:mb-[47px]">
        Booking
      </div>
      <div className="mb-3 md:mb-3 lg:mb-4 xl:mb-5 flex flex-row justify-between">
        <div>
          <input type="text" name="" id="" />
        </div>
        <div>
          <div>Sort by: </div>
          <div></div>
        </div>
      </div>
      <div className="BookingLog">
        <BookingListing />
      </div>
    </div>
  );
};

export default Booking;
