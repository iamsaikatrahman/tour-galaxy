import React from "react";
import logo from "../../images/brand-logo.png";
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcStripe,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-50  py-4 relative bottom-0 w-full">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 justify-items-center">
          <div className="flex items-center">
            <img src={logo} className="w-24" alt="" />
            <h2 className="ml-2 font-bold text-3xl">
              Tour <span className="text-red-500 underline">Galaxy</span>
            </h2>
          </div>
          <div className="text-center lg:text-left mb-4 lg:mb-0">
            <h2 className="font-bold text-xl mb-4">About Us</h2>
            <p className="font-medium">Our Story</p>
            <p className="font-medium">Travel Blog & Tips</p>
            <p className="font-medium">Working With Us</p>
            <p className="font-medium">Be Our Partner</p>
          </div>
          <div className="text-center lg:text-left mb-4 lg:mb-0">
            <h2 className="font-bold text-xl mb-4">Support</h2>
            <p className="font-medium">Customer Support</p>
            <p className="font-medium">Privacy & Policy</p>
            <p className="font-medium">Contact Channels</p>
          </div>
          <div className="text-center lg:text-left">
            <h2 className="font-bold text-xl mb-4">Pay Safely With Us</h2>
            <p className="font-medium">
              The payment is encrypted and transmited securely with an SSL
              protocol
            </p>
            <div className="flex justify-center lg:justify-start mt-2">
              <FaCcVisa className="text-4xl text-blue-800 mr-4" />
              <FaCcMastercard className="text-4xl text-blue-800 mr-4" />
              <FaCcPaypal className="text-4xl text-blue-800 mr-4" />
              <FaCcStripe className="text-4xl text-blue-800 mr-4" />
            </div>
          </div>
        </div>
      </div>
      <p className="text-center font-bold my-4">
        All Copy Right &copy; {new Date().getFullYear()} Reserve on Tour Galaxy
      </p>
    </div>
  );
};

export default Footer;
