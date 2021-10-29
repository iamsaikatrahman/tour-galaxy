import React from "react";
import { AiOutlineFieldTime } from "react-icons/ai";
import {
  IoPeopleOutline,
  IoCalendarOutline,
  IoPaperPlaneOutline,
  IoPricetagsOutline,
} from "react-icons/io5";

const TourInfo = ({ duration, name, shortDes, description, price }) => {
  return (
    <div className="md:col-span-2 lg:col-span-3 px-4">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 justify-items-center md:justify-items-start  p-2 py-4 rounded-lg items-center bg-gray-50 w-full  mt-8 flex shadow-sm border-2">
        <p className="font-bold text-lg my-2 lg:my-0 pr-2 lg:border-r-2">
          <AiOutlineFieldTime className="inline text-red-600 text-xl font-bold" />{" "}
          {duration}
        </p>
        <p className="font-bold text-lg my-2 lg:my-0 pr-2 lg:border-r-2">
          <IoPeopleOutline className="inline text-red-600 text-xl font-bold" />{" "}
          Max People : 24
        </p>
        <p className="font-bold text-lg my-2 lg:my-0 pr-2 lg:border-r-2">
          <IoCalendarOutline className="inline text-red-600 text-xl font-bold" />{" "}
          Dec 1 - Jun 10
        </p>
        <p className="font-bold my-2 lg:my-0 text-lg">
          <IoPaperPlaneOutline className="inline text-red-600 text-xl font-bold" />{" "}
          Pickup: Airpot
        </p>
      </div>
      <h2 className="text-3xl font-bold mt-8 my-4">{name}</h2>
      <p className="font-bold text-4xl text-red-500 my-4">
        <IoPricetagsOutline className="inline" />{" "}
        <span className="text-base text-black">From</span>{" "}
        <span className="text-xl"> $</span>
        {price}
      </p>
      <p className="text-md font-medium my-2">{shortDes}</p>
      <p className="text-md font-medium my-2">{description}</p>
    </div>
  );
};

export default TourInfo;
