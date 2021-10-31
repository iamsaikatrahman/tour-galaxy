import React from "react";

const BookingTourCard = ({
  _id,
  name,
  address,
  qntPeople,
  tourimglink,
  tourname,
  tourprice,
  tourduration,
  tourstatus,
  handleDeleteTour,
}) => {
  return (
    <div className="w-full bg-white border-2 rounded-lg shadow-sm hover:shadow-lg overflow-hidden flex flex-col md:flex-row">
      <div className="w-full md:w-2/5 h-80">
        <img
          className="object-center object-cover w-full h-full"
          src={tourimglink}
          alt=""
        />
      </div>
      <div className="w-full md:w-3/5 text-left p-6 md:p-4 space-y-2">
        <p className="text-xl text-gray-700 font-bold">
          {tourname.substring(0, 50)}...
        </p>
        <p className="font-bold text-gray-500">${tourprice}</p>
        <p className="text-base leading-relaxed text-gray-500 font-normal">
          {tourduration}
        </p>
        <p className="text-xs font-bold text-indigo-300 mt-0">by {name}</p>
        <p className="text-base leading-relaxed text-gray-500 font-normal">
          Pick Up Address: {address.substring(0, 20)}...
        </p>
        <p className="text-base font-bold leading-relaxed text-gray-500 font-normal">
          Status: {tourstatus}
        </p>
        <button
          onClick={() => {
            handleDeleteTour(_id);
          }}
          className="p-2 pl-5 pr-5 bg-blue-500 font-medium text-gray-100 text-lg rounded-lg focus:border-4 border-blue-300"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default BookingTourCard;
