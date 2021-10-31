import React from "react";

const BlogCard = ({ contentimg, imgUrl, author, title, content }) => {
  return (
    <div className="bg-white">
      <div className="bg-white shadow-lg p-4 rounded-xl">
        <img
          className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72  rounded-xl w-full object-cover object-center mb-6"
          src={contentimg}
          alt=""
        />
        <div className="mb-4">
          <div className="flex items-center">
            <img src={imgUrl} className="w-12 h-12 rounded-full mr-2" alt="" />
            <div>
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                BLOGER
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font ">
                {author}
              </h2>
            </div>
          </div>
        </div>
        <p className="leading-relaxed text-xl font-bold">
          {title.substring(0, 35)}...
        </p>
        <p className="leading-relaxed text-lg font-medium mt-2">
          {content.substring(0, 100)}...
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
