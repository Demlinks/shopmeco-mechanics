import React, { useEffect, useState } from "react";
import { BookingHeader } from "../../../Data/Constant Data";
import { BookingData } from "../../../Data/Dummy Data/db";
import {
  BookingCompleted,
  BookingIncompleted,
  BookingPaid,
  BookingUnpaid,
} from "../../../assets/images/Booking";
import { Link } from "react-router-dom";

const BookingListingDesktop = ({ isHome = false }) => {
  const [BookingDataFilter, setBookingDataFilter] = useState([]);
  const [actionToggle, setActionToggle] = useState();
  useEffect(() => {
    isHome
      ? setBookingDataFilter(BookingData.slice(0, 6))
      : setBookingDataFilter(BookingData);
  }, [isHome]);

  // //////////
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
  /////
  // OR
  // const BookingDataFilter = isHome ? BookingData.slice(0, 6) : BookingData;
  ///
  return (
    <table className="w-full border-collapse hidden lg:table">
      <thead className="text-left">
        <tr className="text-[rgba(181,_181,_181,_1)] text-[16.5px] leading-[18px]">
          {BookingHeader.map((header, index) => {
            return (
              <th
                key={header.id}
                className={`font-normal pb-[21px] border-b-2 border-solid border-[rgba(181,_181,_181,_0.5)] ${
                  header.id === BookingHeader.length ? "pr-[0]" : "pr-[5px]"
                }`}
              >
                {header.name}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody className="w-full">
        {BookingDataFilter.map((bookingdata, index) => {
          return (
            <tr key={index} className="font-normal text-[rgba(31,_31,_31,_1)]">
              <td
                className={`pr-[5px] pb-[21px] border-b-2 border-solid border-[rgba(245,_243,_255,_1)] ${
                  index === 0 ? "pt-[25px]" : "pt-[20px]"
                }`}
              >
                {bookingdata.customerName}
              </td>
              <td
                className={`pr-[5px] pb-[21px] border-b-2 border-solid border-[rgba(245,_243,_255,_1)] ${
                  index === 0 ? "pt-[25px]" : "pt-[20px]"
                }`}
              >
                {bookingdata.service.length >= 12
                  ? bookingdata.service.slice(0, 11) + "..."
                  : bookingdata.service}
              </td>
              <td
                className={`pr-[5px] pb-[21px] border-b-2 border-solid border-[rgba(245,_243,_255,_1)] ${
                  index === 0 ? "pt-[25px]" : "pt-[20px]"
                }`}
              >
                <div className="flex flex-row items-center">
                  <span className="w-5 h-auto mr-[10px]">
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
                  </span>
                  <span
                    className={`my-auto ${
                      bookingdata.bookingStatus === "Completed"
                        ? "text-[rgba(255,_183,_76,_1)]"
                        : "text-[rgba(239,_31,_31,_1)]"
                    }`}
                  >
                    {bookingdata.bookingStatus}
                  </span>
                </div>
              </td>
              <td
                className={`pr-[5px] pb-[21px] border-b-2 border-solid border-[rgba(245,_243,_255,_1)] ${
                  index === 0 ? "pt-[25px]" : "pt-[20px]"
                }`}
              >
                <div className="flex flex-row items-center">
                  <span className="w-5 h-auto mr-[10px]">
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
                  </span>
                  <span
                    className={`my-auto ${
                      bookingdata.paymentStatus === "Paid"
                        ? "text-[rgba(12,_223,_36,_1)]"
                        : "text-[rgba(239,_31,_31,_1)]"
                    }`}
                  >
                    {bookingdata.paymentStatus}
                  </span>
                </div>
              </td>
              <td
                className={`pr-[5px] pb-[21px] border-b-2 border-solid border-[rgba(245,_243,_255,_1)] ${
                  index === 0 ? "pt-[25px]" : "pt-[20px]"
                }`}
              >
                {bookingdata.date}
              </td>
              <td
                className={`relative pb-[21px] border-b-2 border-solid border-[rgba(245,_243,_255,_1)] text-center ${
                  index === 0 ? "pt-[25px]" : "pt-[20px]"
                }`}
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActionToggle(bookingdata.id);
                  }}
                  className="border border-transparent hover:border-black border-solid pb-3 w-full"
                >
                  ...
                </button>
                <div
                  className={`dropdown absolute w-[164px] z-20 top-[75%] right-0 p-5 flex-col items-start text-sm leading-[14px] rounded-[10px]  shadow-[0px_12px_45px_0px_rgba(74,_25,_172,_0.12)] bg-[rgba(255,_255,_255,_1)] ${
                    bookingdata.id === actionToggle ? "flex" : "hidden"
                  }`}
                >
                  <div className="mb-5 w-full flex flex-row text-left">
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
                      
                      disabled={bookingdata.bookingStatus === "Completed"? true : false}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActionToggle(undefined);
                      }}
                    >
                      Mark as completed
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default BookingListingDesktop;
