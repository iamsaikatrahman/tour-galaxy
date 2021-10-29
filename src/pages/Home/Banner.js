import React from "react";
import { GiCommercialAirplane } from "react-icons/gi";

const Banner = () => {
  return (
    <div className="banner-contianer">
      <div className="flex flex-col justify-center items-center h-full">
        <h2 className="flex text-4xl lg:text-5xl text-white text-center mb-4 font-bold capitalize">
          Find Next Place To Visit...
          <GiCommercialAirplane />
        </h2>
        <p className="text-2xl mb-4 text-center text-white font-medium">
          Discover amzaing places at exclusive deals
        </p>
        <div className="flex w-3/4 md:w-2/4 xl:w-1/4">
          <input
            className="bg-white shadow-sm rounded-r-none  transition h-12 px-5  rounded-md focus:outline-none w-full text-black text-lg "
            type="text"
            placeholder="Search..."
          />
          <button
            type="submit"
            className=" p-2 px-5  bg-blue-500 text-gray-100 text-lg rounded-l-none rounded-lg focus:border-4 border-blue-300"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
