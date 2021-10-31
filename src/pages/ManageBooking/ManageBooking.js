import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import ManageBookingTourCard from "../../components/ManageBookingTourCard";
import Loading from "../../components/Loading";

const ManageBooking = () => {
  const [allbooking, setAllBooking] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://safe-citadel-76628.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => {
        setAllBooking(data);
        setIsLoading(false);
      });
  }, []);
  const handleDeleteTour = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to delete this booking?"
    );
    if (proceed) {
      const url = `https://safe-citadel-76628.herokuapp.com/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted successfull");
            const remainingTour = allbooking.filter((item) => item._id !== id);
            setAllBooking(remainingTour);
          }
        });
    }
  };

  return (
    <div style={{ paddingTop: "85px" }}>
      <div className="container mx-auto px-4">
        {isLoading ? (
          <Loading />
        ) : (
          <div className="py-8 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {allbooking.map((bookingItem) => (
              <ManageBookingTourCard
                key={bookingItem._id}
                {...bookingItem}
                handleDeleteTour={handleDeleteTour}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageBooking;
