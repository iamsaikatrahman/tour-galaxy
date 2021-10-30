import React from "react";
import { Link } from "react-router-dom";
import notFound from "../../images/404-snow.gif";

const NotFound = () => {
  return (
    <div style={{ paddingTop: "85px" }}>
      <img src={notFound} className="h-60 w-full object-contain" alt="" />
      <div className="container mx-auto text-center px-4">
        <h2 className="capitalize font-bold text-xl">
          oops...!! sorry, we couldn't find <br /> the page you are looking for.
        </h2>
        <Link to="/">
          <button className="my-4 p-2 pl-5 pr-5 bg-blue-500 text-gray-100 text-lg font-medium rounded-lg focus:border-4 border-blue-300">
            Back To Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
