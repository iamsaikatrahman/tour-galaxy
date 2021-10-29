import React from "react";
import { AiOutlineFieldTime } from "react-icons/ai";
import { Link } from "react-router-dom";

const ToursCard = ({ _id, imgUrl, name, duration, price, shortDes }) => {
  return (
    <div className=" overflow-hidden shadow-lg transition duration-500 ease-in-out transform  hover:shadow-2xl rounded-lg h-full w-full md:w-80  m-auto">
      <div className=" col-span-1 flex flex-col w-full block h-full">
        <img alt={name} src={imgUrl} className="h-40 w-full object-cover" />
        <div className="bg-white w-full p-4">
          <h2 className="text-xl mb-3 font-bold">{name.substring(0, 25)}...</h2>
          <p className="text-gray-600 font-medium text-justify text-md">
            {shortDes.substring(0, 80)}...
            <Link
              to={`/tourdetails/${_id}`}
              className="inline-flex text-indigo-500"
            >
              Read More
            </Link>
          </p>
          <div className="flex justify-between mt-4">
            <p className="font-bold text-lg">
              <AiOutlineFieldTime className="inline text-red-600 text-xl font-bold" />{" "}
              {duration}
            </p>
            <p className="font-bold text-lg">${price}</p>
          </div>
        </div>
        <div className="flex flex-col mt-auto">
          <div className="py-3 border-b-2"></div>
          <div className="flex justify-center my-2">
            <Link to={`/tourdetails/${_id}`}>
              <button className="p-2 pl-5 pr-5 bg-blue-500 text-gray-100 text-lg rounded-lg focus:border-4 border-blue-300">
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToursCard;
