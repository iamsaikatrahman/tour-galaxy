import React from "react";
import SectionHeder from "../../components/SectionHeder";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div style={{ paddingTop: "75px" }}>
      <SectionHeder title={"About Us"} />
      <div className="container mx-auto px-4">
        <div className="flex md:flex-row flex-col-reverse items-center py-8">
          <div className="w-full px-4 text-center md:text-left">
            <h2 className="text-gray-500 mb-2 font-bold text-xl">Philosophy</h2>
            <h2 className="font-bold text-2xl mb-2">Our Top Mission</h2>
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
              src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
