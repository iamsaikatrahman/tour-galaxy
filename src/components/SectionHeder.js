import React from "react";

const SectionHeder = ({ title }) => {
  return (
    <div className="section-bg flex justify-center h-full items-center">
      <div>
        <h2 className="text-white text-3xl font-bold">{title}</h2>
        <div className="w-24 h-1.5 rounded bg-yellow-500 mx-auto my-4"></div>
      </div>
    </div>
  );
};

export default SectionHeder;
