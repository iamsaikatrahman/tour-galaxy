import React from "react";
import TestimonialCard from "../../components/TestimonialCard";

const Feedback = () => {
  return (
    <div>
      <h2 className="font-bold text-3xl text-center mt-8 my-4">
        Our Client Say About Us
      </h2>
      <div className="w-24 h-1.5 bg-yellow-400 rounded mx-auto mb-8"></div>
      <TestimonialCard />
    </div>
  );
};

export default Feedback;
