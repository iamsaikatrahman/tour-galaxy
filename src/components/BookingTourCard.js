import React from "react";

const BookingTourCard = ({
  _id,
  name,
  email,
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
        <p className="text-xl text-gray-700 font-bold">{tourname}</p>
        <p className="text-base text-gray-400 font-normal">${tourprice}</p>
        <p className="text-base leading-relaxed text-gray-500 font-normal">
          {tourduration}
        </p>
        <p className="text-base leading-relaxed text-gray-500 font-normal">
          Booking by {name}
        </p>
        <p className="text-base leading-relaxed text-gray-500 font-normal">
          {address}
        </p>
        <p className="text-base leading-relaxed text-gray-500 font-normal">
          Status: {tourstatus}
        </p>
        <button
          onClick={() => {
            handleDeleteTour(_id);
          }}
          className="p-2 pl-5 pr-5 bg-blue-500 text-gray-100 text-lg rounded-lg focus:border-4 border-blue-300"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookingTourCard;
