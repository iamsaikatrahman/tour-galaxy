import React from "react";
import { Link } from "react-router-dom";

const MiniAboutUs = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse justify-center items-center py-24 px-4">
      <div className="p-4 md:pr-12 w-full">
        <h2 className="font-bold text-3xl text-center md:text-left mt-8 my-4">
          Your story starts <br /> with us
        </h2>
        <div className="md:w-12 w-24 h-1.5 bg-yellow-400 rounded mx-auto md:mx-0 mb-8"></div>
        <p className="text-lg font-medium text-center md:text-left">
          Travel is the only thing you buy that makes you richer. Let’s kick our
          list off with some of the more famous travel quotes by famous people.
          We’ll get to the more obscure as we go down the list. Feel free to
          pin, download, and print them off to put up around your house for
          inspiration!
        </p>
        <Link to="/aboutus">
          <button className=" mt-4 font-medium p-2 pl-5 pr-5 bg-blue-500 text-gray-100 text-lg rounded-lg focus:border-4 border-blue-300">
            Read More About Us
          </button>
        </Link>
      </div>
      <div className="w-full">
        <img
          className="rounded-lg"
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=821&q=80"
          alt=""
        />
      </div>
    </div>
  );
};

export default MiniAboutUs;
