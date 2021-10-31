import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookingForm from "./BookingForm";
import TourInfo from "./TourInfo";

const TourDetails = () => {
  const { tourId } = useParams();
  const [tour, setTour] = useState({});
  useEffect(() => {
    fetch(`https://safe-citadel-76628.herokuapp.com/tours/${tourId}`)
      .then((res) => res.json())
      .then((data) => setTour(data));
  }, []);
  return (
    <div style={{ paddingTop: "75px" }}>
      <img src={tour.imgUrl} className="h-80 w-full object-cover" alt="" />
      <div className="container mx-auto px-4">
        {/* Tour Details and Booking Form */}
        <div className="grid grid-cols-1  md:grid-cols-3  lg:grid-cols-4">
          <TourInfo {...tour} />
          <BookingForm {...tour} />
        </div>
        {/* What to Expect */}
        {/* FAQ with get a question */}
      </div>
    </div>
  );
};

export default TourDetails;
