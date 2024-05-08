import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BookingData } from "../../../Data/Dummy Data/db";
import {
  BookingCalendar,
  BookingCompleted,
  BookingIncompleted,
  BookingPaid,
  BookingUnpaid,
} from "../../../assets/images/Booking";

const BookingListingMobile = ({ isHome = false }) => {
  const [BookingDataFilter, setBookingDataFilter] = useState([]);
  const [actionToggle, setActionToggle] = useState();
  useEffect(() => {
    isHome
      ? setBookingDataFilter(BookingData.slice(0, 6))
      : setBookingDataFilter(BookingData);
  }, [isHome]);

  /////
  // OR
  // const BookingDataFilter = isHome ? BookingData.slice(0, 6) : BookingData;
  /////

  /////////////
  // ACTION TOGGLE HANDLER
  /////////////
  useEffect(() => {
    const handleActionToggle = (e) => {
      if (actionToggle && !e.target.closest(".dropdown")) {
        setActionToggle(undefined);
      }
    };

    document.body.addEventListener("click", handleActionToggle);

    return () => {
      document.body.removeEventListener("click", handleActionToggle);
    };
  }, [actionToggle]);

  return (
    <div className="flex flex-col md:flex-row w-full md:flex-wrap font-Poppins lg:hidden text-center text-lg">
      {/* Mobile view not yet ready */}
      {BookingDataFilter.map((bookingdata, index) => {
        return (
          <div
            key={index}
            className="overflow-hidden flex flex-row justify-between w-full md:w-[calc(50%-20px)] border border-solid border-[rgba(212,_204,_255,_1)] bg-[rgba(251,_250,_255,_1)] rounded-lg p-3 mb-4 mx-0 md:mb-5 md:mx-[10px]"
          >
            <div className="flex flex-col justify-between mr-2">
              <div className="flex flex-row mb-6">
                <div className="mr-1 my-[5.5%] size-[6px] bg-[rgba(255,_183,_76,_1)] rounded-full"></div>
                <div className="text-left">
                  <div className="text-[rgba(31,_31,_31,_1)] text-base leading-[21.78px] mb-[2px]">
                  {bookingdata.service.length >= 12
                  ? bookingdata.service.slice(0, 11) + "..."
                  : bookingdata.service}
                  </div>
                  <div className="text-[13px] leading-[14px] font-medium text-[rgba(170,_168,_168,_1)]">
                    {bookingdata.customerName}
                  </div>
                </div>
              </div>
              <div className="text-[12px] leading-[16.34px] ">
                <div className="flex flex-row items-center">
                  <div className="w-5 h-auto mr-[6px]">
                    <img
                      src={BookingCalendar}
                      alt="Calendar"
                      className="size-full object-center"
                    />
                  </div>
                  <div>{bookingdata.date}</div>
                </div>
                <div className="flex flex-row items-center my-1">
                  <div className="w-5 h-auto mr-[6px]">
                    <img
                      src={
                        bookingdata.bookingStatus === "Completed"
                          ? BookingCompleted
                          : BookingIncompleted
                      }
                      alt={
                        bookingdata.bookingStatus === "Completed"
                          ? "Completed"
                          : "Incompleted"
                      }
                      className="size-full object-center"
                    />
                  </div>
                  <div
                    className={`my-auto ${
                      bookingdata.bookingStatus === "Completed"
                        ? "text-[rgba(255,_183,_76,_1)]"
                        : "text-[rgba(239,_31,_31,_1)]"
                    }`}
                  >
                    {bookingdata.bookingStatus}
                  </div>
                </div>
                <div className="flex flex-row items-center">
                  <div className="w-5 h-auto mr-[6px]">
                    <img
                      src={
                        bookingdata.paymentStatus === "Paid"
                          ? BookingPaid
                          : BookingUnpaid
                      }
                      alt={
                        bookingdata.paymentStatus === "Paid" ? "Paid" : "Unpaid"
                      }
                      className="size-full object-center"
                    />
                  </div>
                  <div
                    className={`my-auto ${
                      bookingdata.paymentStatus === "Paid"
                        ? "text-[rgba(12,_223,_36,_1)]"
                        : "text-[rgba(239,_31,_31,_1)]"
                    }`}
                  >
                    {bookingdata.paymentStatus}
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`self-start relative`}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActionToggle(bookingdata.id);
                }}
                className="size-6 border pb-2 border-transparent hover:border-black border-solid flex justify-center items-center"
              >
                ...
              </button>

              <div
                className={`dropdown absolute w-[164px] z-20 top-[90%] right-0 p-[14px] flex-col items-start text-sm leading-[14px] rounded-[10px]  shadow-[0px_12px_45px_0px_rgba(74,_25,_172,_0.12)] bg-[rgba(255,_255,_255,_1)] ${
                  bookingdata.id === actionToggle ? "flex" : "hidden"
                }`}
              >
                <div className="mb-[14px] w-full flex flex-row text-left">
                  <Link
                    onClick={(e) => {
                      e.stopPropagation();
                      setActionToggle(undefined);
                    }}
                    to={""}
                    className=" text-[rgba(31,_31,_31,_1)] border-b-[0.95px] border-solid border-[rgba(249,_249,_249,_1)] w-full"
                  >
                    View
                  </Link>
                </div>
                <div
                  className={
                    bookingdata.bookingStatus === "Completed"
                      ? "text-[rgba(181,_181,_181,_1)]"
                      : "text-[rgba(31,_31,_31,_1)]"
                  }
                >
                  <button
                    disabled={
                      bookingdata.bookingStatus === "Completed" ? true : false
                    }
                    onClick={(e) => {
                      e.stopPropagation();
                      setActionToggle(undefined);
                    }}
                  >
                    Mark as completed
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BookingListingMobile;
