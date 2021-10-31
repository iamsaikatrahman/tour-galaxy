import React from "react";
import { useState } from "react";

const ManageBookingTourCard = ({
  tourimglink,
  tourname,
  _id,
  name,
  tourprice,
  tourduration,
  tourstatus,
  handleDeleteTour,
}) => {
  const [isApprove, setIsApprove] = useState(tourstatus);
  const handleUpdateStatus = (id) => {
    const data = { tourstatus };
    const url = `https://safe-citadel-76628.herokuapp.com/orders/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Update Successfully Done!!");
        }
      });
  };
  const handleApprove = () => {
    if (isApprove === "Pending") {
      const proceed = window.confirm(
        "Are you sure, You want to approve this booking?"
      );
      if (proceed) {
        setIsApprove((tourstatus = "Approved"));
        handleUpdateStatus(_id);
      }
    }
  };
  return (
    <div
      className="
          bg-white
          shadow-md
          h-96
          mx-3
          rounded-lg
          flex flex-col
          justify-around
          items-center
          overflow-hidden
          sm:flex-row sm:h-52 sm:w-3/5
          md:w-full
          lg:w-96
          hover:shadow-lg
        "
    >
      <img
        className="h-1/2 w-full sm:h-full sm:w-1/2 object-cover"
        src={tourimglink}
        alt=""
      />

      <div
        className="
            flex-1
            w-full
            flex flex-col
            items-baseline
            justify-around
            h-1/2
            pl-6
            sm:h-full sm:items-baseline sm:w-1/2
          "
      >
        <div className="flex flex-col justify-start items-baseline">
          <h1 className="text-lg font-normal mb-0 text-gray-600 font-sans">
            {tourname.substring(0, 40)}...
          </h1>
          <span className="text-xs text-indigo-300 mt-0">by {name}</span>
        </div>
        <p className="text-xs text-gray-500 w-4/5">{tourduration}</p>
        <p className="text-xs font-bold text-gray-500 w-4/5">
          Status: {isApprove}
        </p>
        <div className="w-full flex justify-between items-center">
          <h1 className="font-bold text-gray-500">${tourprice}</h1>
          {isApprove === "Pending" && (
            <button
              onClick={() => {
                handleApprove();
              }}
              className="bg-gray-700 mr-5 text-white px-3 py-1 rounded shadow-md"
            >
              Approve
            </button>
          )}
        </div>
        <div className="w-full flex justify-between items-center">
          <button
            onClick={() => handleDeleteTour(_id)}
            className="bg-blue-700 w-full rounded mr-5 text-white px-3 py-1  shadow-md"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageBookingTourCard;
