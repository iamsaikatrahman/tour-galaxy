import React, { useEffect, useState } from "react";
import BookingTourCard from "../../components/BookingTourCard";
import Loading from "../../components/Loading";
import useAuth from "../../hooks/useAuth";

const MyBooking = () => {
  const [mybooking, setMyBooking] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => {
        const myorder = data.filter((item) => item.email === user.email);
        setMyBooking(myorder);
        setIsloading(false);
      });
  }, []);
  const handleDeleteTour = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      const url = `http://localhost:5000/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted successfull");
            const remainingTour = mybooking.filter((item) => item._id !== id);
            setMyBooking(remainingTour);
          }
        });
    }
  };
  return (
    <div style={{ paddingTop: "85px" }}>
      <div className="container mx-auto px-4">
        {isloading ? (
          <Loading />
        ) : (
          <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {mybooking.map((bookingitem) => (
                <BookingTourCard
                  key={bookingitem._id}
                  {...bookingitem}
                  handleDeleteTour={handleDeleteTour}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default MyBooking;
