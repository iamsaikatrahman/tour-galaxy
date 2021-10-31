import React from "react";
import "./AddTour.css";
import { useForm } from "react-hook-form";
import brandlogo from "../../images/brand-logo.png";
import axios from "axios";

const AddTour = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios.post("http://localhost:5000/tours", data).then((res) => {
      if (res.data.insertedId) {
        alert("New Tour Add Sucessfully");
        reset();
      }
    });
  };
  return (
    <div style={{ paddingTop: "85px" }}>
      <div className="grid md:grid-cols-2 min-h-screen">
        <div className="hidden md:block ">
          <div className="addTourbg flex justify-center items-center min-h-screen">
            <div>
              <h2 className="text-4xl text-white font-bold">
                Add New Traveling Place.
              </h2>
            </div>
          </div>
        </div>
        <div className="bg-white flex justify-center items-center min-h-screen">
          <div>
            <div className="flex mb-8 justify-center items-center">
              <img src={brandlogo} className="w-16 h-16" alt="" />
              <h2 className="ml-2 text-3xl font-bold">
                Tour <span className="text-red-500 underline">Galaxy</span>
              </h2>
            </div>
            <h2 className="md:hidden  text-2xl text-center font-bold">
              Add New Traveling Place.
            </h2>
            <div className="md:hidden w-24 h-1.5 bg-yellow-400 rounded mx-auto my-4"></div>
            <form className="px-8 my-8" onSubmit={handleSubmit(onSubmit)}>
              <input
                className="border-2 my-2 rounded-lg shadow-sm w-full p-2"
                type="text"
                placeholder="Enter Tour Name"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-red-500 font-medium">
                  This field is required!!
                </span>
              )}
              <input
                className="border-2 my-2 rounded-lg shadow-sm w-full p-2"
                type="text"
                placeholder="Enter Tour Thumbnail Image Url"
                {...register("imgUrl", { required: true })}
              />
              {errors.imgUrl && (
                <span className="text-red-500 font-medium">
                  This field is required!!
                </span>
              )}
              <input
                className="border-2 my-2 rounded-lg shadow-sm w-full p-2"
                type="text"
                placeholder="How many day and night this tour?"
                {...register("duration", { required: true })}
              />
              {errors.duration && (
                <span className="text-red-500 font-medium">
                  This field is required!!
                </span>
              )}
              <input
                className="border-2 my-2 rounded-lg shadow-sm w-full p-2"
                type="text"
                placeholder="Which country?"
                {...register("country", { required: true })}
              />
              {errors.country && (
                <span className="text-red-500 font-medium">
                  This field is required!!
                </span>
              )}
              <input
                className="border-2 my-2 rounded-lg shadow-sm w-full p-2"
                type="number"
                placeholder="Tour package price"
                {...register("price", { required: true })}
              />
              {errors.price && (
                <span className="text-red-500 font-medium">
                  This field is required!!
                </span>
              )}
              <textarea
                className="border-2 my-2 rounded-lg shadow-sm w-full p-2"
                type="text"
                placeholder="Write some Short Description"
                {...register("shortDes", { required: true })}
              />
              {errors.shortDes && (
                <span className="text-red-500 font-medium">
                  This field is required!!
                </span>
              )}
              <textarea
                className="border-2 my-2 rounded-lg shadow-sm w-full p-2"
                type="text"
                placeholder="Write some Detail Description"
                {...register("description", { required: true })}
              />
              {errors.description && (
                <span className="text-red-500 font-medium">
                  This field is required!!
                </span>
              )}

              <input
                className=" text-white font-bold my-2 bg-yellow-500 rounded-lg shadow-sm w-full p-2"
                type="submit"
                value="ADD TOUR"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTour;
