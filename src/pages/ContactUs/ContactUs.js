import React from "react";
import SectionHeder from "../../components/SectionHeder";
import { IoCallOutline } from "react-icons/io5";
import { HiOutlineMailOpen } from "react-icons/hi";
import { GrLocation } from "react-icons/gr";

const ContactUs = () => {
  return (
    <div style={{ paddingTop: "75px" }}>
      <SectionHeder title={"Contact Us"} />
      <div className="container mx-auto px-4">
        <div className="flex md:flex-row flex-col-reverse items-center py-8">
          <div className="w-full px-4 text-center md:text-left">
            <h2 className="text-gray-500 mb-2 font-bold text-xl">Strategy</h2>
            <h2 className="font-bold text-2xl mb-2">We Provide Solution</h2>
            <div className="w-24 h-1.5 rounded mb-4 bg-yellow-500 mx-auto md:mx-0"></div>
            <p className="font-medium">
              Travel is the only thing you buy that makes you richer. Let’s kick
              our list off with some of the more famous travel quotes by famous
              people. We’ll get to the more obscure as we go down the list. Feel
              free to pin, download, and print them off to put up around your
              house for inspiration!
            </p>
          </div>
          <div className="w-full">
            <img
              className="rounded-xl w-full"
              src="https://media.istockphoto.com/photos/customer-support-executive-picture-id1263114732?b=1&k=20&m=1263114732&s=170667a&w=0&h=YyjgIISSjYm0Eps16fsgaGYPyZm22rWgn-x06LjouJg="
              alt=""
            />
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-4 text-center py-8">
          <div>
            <h2 className="font-bold text-3xl mb-4">Call Us</h2>
            <h2 className="font-medium text-lg mb-4">
              <IoCallOutline className="inline" /> (175)-079-2741
            </h2>
          </div>
          <div>
            <h2 className="font-bold text-3xl mb-4">Email Us</h2>
            <h2 className="font-medium text-lg mb-4">
              <HiOutlineMailOpen className="inline text-xl mr-2" />
              tourgalaxysupport@gamil.com
            </h2>
          </div>

          <div>
            <h2 className="font-bold text-3xl mb-4">Visit Our Office</h2>
            <h2 className="font-medium text-lg mb-4">
              <GrLocation className="inline mr-2" />
              128 Street Country road, Newyork
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
