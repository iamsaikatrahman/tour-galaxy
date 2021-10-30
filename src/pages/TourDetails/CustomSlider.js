import React, { useEffect, useState } from "react";

const CustomSlider = () => {
  const slideImage = [
    {
      image:
        "https://images.unsplash.com/photo-1593642634402-b0eb5e2eebc9?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      image:
        "https://images.unsplash.com/photo-1633419180418-b1cb4bca5881?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      image:
        "https://images.unsplash.com/photo-1635525315789-8cce3d739ca1?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      image:
        "https://images.unsplash.com/photo-1635526910370-6881e1756fee?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      image:
        "https://images.unsplash.com/photo-1635328614046-4c953bfa7e37?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      image:
        "https://images.unsplash.com/photo-1604343403128-932fdf2a395b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
  ];
  const [index, setIndex] = useState(0);
  const { image } = slideImage[index];
  const checkNumber = (number) => {
    if (number > slideImage.length - 1) {
      return 0;
    }
    if (number < 0) {
      return slideImage.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  useEffect(() => {
    setInterval(() => {
      nextPerson();
    }, 3000);
  }, []);
  return (
    <div>
      <div className="flex justify-between">
        <button onClick={prevPerson}>pre</button>
        <div>
          <img src={image} style={{ width: "200px", height: "200px" }} alt="" />
        </div>
        <button onClick={nextPerson}>next</button>
      </div>
    </div>
  );
};

export default CustomSlider;
