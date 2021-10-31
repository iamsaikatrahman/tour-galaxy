import React, { useEffect, useState } from "react";
import BlogCard from "../../components/BlogCard";
import Loading from "../../components/Loading";
import ToursCard from "../../components/ToursCard";
import Banner from "./Banner";
import Feedback from "./Feedback";
import "./Home.css";
import MiniAboutUs from "./MiniAboutUs";

const Home = () => {
  const [tours, setTours] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [isloadingForBlog, setIsLoadingForBlog] = useState(true);
  useEffect(() => {
    fetch("https://safe-citadel-76628.herokuapp.com/tours")
      .then((res) => res.json())
      .then((data) => {
        setTours(data);
        setIsLoading(false);
      });
  }, []);
  useEffect(() => {
    fetch("https://safe-citadel-76628.herokuapp.com/blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setIsLoadingForBlog(false);
      });
  }, []);
  return (
    <div style={{ paddingTop: "75px" }}>
      {/* Banner */}
      <Banner />
      <div className="container mx-auto px-4 py-4">
        <h2 className="font-bold text-3xl text-center my-4">Popular Tours</h2>
        <div className="w-24 h-1.5 bg-yellow-400 rounded mx-auto mb-8"></div>
        {isloading ? (
          <Loading />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tours.map((tour) => (
              <ToursCard key={tour._id} {...tour} />
            ))}
          </div>
        )}
        {/* About Us */}
        <MiniAboutUs />
        {/* Feedback */}
        <Feedback />
        {/* Our Blogs */}
        <h2 className="font-bold text-3xl text-center mt-8 my-4">
          Our Blogs & News
        </h2>
        <div className="w-24 h-1.5 bg-yellow-400 rounded mx-auto mb-8"></div>
        {isloadingForBlog ? (
          <Loading />
        ) : (
          <div className=" py-4 mx-auto max-w-7x1">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogs.slice(0, 3).map((blog) => (
                <BlogCard key={blog._id} {...blog} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
