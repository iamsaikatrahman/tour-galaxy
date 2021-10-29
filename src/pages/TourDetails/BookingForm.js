import React from "react";
import { useForm } from "react-hook-form";

const BookingForm = ({ name, price, duration }) => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
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
            {...register("name")}
          />
          <input
            className="border-2 shadow-sm p-2 my-2 font-medium w-full rounded-lg outline-none"
            placeholder="User Email"
            type="email"
            {...register("email")}
          />
          <input
            className="border-2 shadow-sm p-2 my-2 font-medium w-full rounded-lg outline-none"
            placeholder="Enter Your PickUp Address"
            type="text"
            {...register("address")}
          />
          <input
            className="border-2 shadow-sm p-2 my-2 font-medium w-full rounded-lg outline-none"
            placeholder="How many of you will go?"
            type="number"
            {...register("address")}
          />
          <input
            className="border-2 shadow-sm p-2 my-2 font-medium w-full rounded-lg outline-none"
            placeholder="Tour Name"
            value={name || ""}
            type="text"
            {...register("tourname")}
          />
          <input
            className="border-2 shadow-sm p-2 my-2 font-medium w-full rounded-lg outline-none"
            placeholder="Tour Price"
            value={"Tour Price: $" + price || ""}
            type="text"
            {...register("tourprice")}
          />
          <input
            className="border-2  shadow-sm p-2 my-2 font-medium w-full rounded-lg outline-none"
            placeholder="Tour Duration"
            value={"For " + duration || ""}
            type="text"
            {...register("tourduration")}
          />
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
