import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

const BookingForm = ({ name, price, duration, country, imgUrl }) => {
  const { user } = useAuth();
  const { displayName, email } = user;
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.tourname = name;
    data.tourimglink = imgUrl;
    data.tourprice = price;
    data.tourduration = duration;
    data.country = country;
    data.tourstatus = "Pending";
    axios
      .post("https://safe-citadel-76628.herokuapp.com/orders", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Booking Successfully done.");
          reset();
        }
      });
  };
  return (
    <div className="px-4">
      <h2 className="text-3xl text-center font-bold mt-8 my-4">Booking Form</h2>
      <div className="w-24 h-1.5 bg-yellow-400 rounded mx-auto mb-8"></div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="border-2 shadow-sm p-2 my-2 font-medium w-full rounded-lg outline-none"
            placeholder="User Name"
            type="text"
            readOnly
            {...register("name", setValue("name", displayName))}
          />
          <input
            className="border-2 shadow-sm p-2 my-2 font-medium w-full rounded-lg outline-none"
            placeholder="User Email"
            type="email"
            readOnly
            {...register("email", setValue("email", email))}
          />
          <input
            className="border-2 shadow-sm p-2 my-2 font-medium w-full rounded-lg outline-none"
            placeholder="Enter Your PickUp Address"
            type="text"
            {...register("address", { required: true })}
          />
          {errors.address && <span>Address is required</span>}
          <input
            className="border-2 shadow-sm p-2 my-2 font-medium w-full rounded-lg outline-none"
            placeholder="How many of you will go?"
            type="number"
            {...register("qntPeople", { required: true })}
          />
          {errors.qntPeople && <span>This field is required</span>}
          <input
            className="bg-yellow-500 text-white  p-2 my-2 font-bold w-full rounded-lg outline-none"
            type="submit"
            value="Proceed To Booking "
          />
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
