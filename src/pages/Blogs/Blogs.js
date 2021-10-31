import React, { useEffect } from "react";
import { useState } from "react";
import BlogCard from "../../components/BlogCard";
import Loading from "../../components/Loading";
import SectionHeder from "../../components/SectionHeder";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [isloadingForBlog, setIsLoadingForBlog] = useState(true);
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
      <SectionHeder title={"Our Blog"} />
      <div className="container mx-auto px-4">
        {isloadingForBlog ? (
          <Loading />
        ) : (
          <div className=" py-4 mx-auto max-w-7x1">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogs.map((blog) => (
                <BlogCard key={blog._id} {...blog} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;
