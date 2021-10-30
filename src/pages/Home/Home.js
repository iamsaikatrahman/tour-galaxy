import React, { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import ToursCard from "../../components/ToursCard";
import Banner from "./Banner";
import "./Home.css";

const Home = () => {
  const [tours, setTours] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://safe-citadel-76628.herokuapp.com/tours")
      .then((res) => res.json())
      .then((data) => {
        setTours(data);
        setIsLoading(false);
      });
  }, []);
  return (
    <div style={{ paddingTop: "75px" }}>
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
      </div>
    </div>
  );
};

export default Home;
