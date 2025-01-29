import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Mans from "../../../../StaticData/Mens.js";
import MiniCard from "../../MiniCardCarousel/MiniCard";
import { Link } from "react-router-dom";
import axios from "axios";

const BasicCarousels = (props) => {
  const [products, setproducts] = useState([]);
  const getProductData = async () => {
    try {
      const res = await axios.get(process.env.VITE_API_BROWSE_ALL_API);
      const data = res.data;
      setproducts(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProductData();
  }, []);
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 5, paddingLeft: 10, paddingRight: 0 },
  };

  const items = products
    .filter((itemx) => itemx.category == "Man Kurta's")
    .map((items) => {
      return (
        <MiniCard
          key={items.id}
          itemsTitle={items.title}
          discription={items.description}
          image={items.image}
        />
      );
    });
  return (
    <div className="mt-[5rem]">
      <div className="flex group flex-row justify-center items-center gap-5 mt-10">
        <Link
          to={"/BrowseAll"}
          className="p-2 bg-black text-white duration-1000 rounded-xl border border-gray-700 
        transition group-hover:bg-white group-hover:text-black"
        >
          NEW DROPS
        </Link>
        <div className="group">
          <Link
            to={"/BrowseAll"}
            className="p-2 bg-white hover:bg-black text-back hover:text-white duration-1000 rounded-xl border  border-gray-700"
          >
            FASHION
          </Link>
        </div>
        <Link
          to={"/BrowseAll"}
          className="p-2 bg-white hover:bg-black text-back hover:text-white duration-1000 rounded-xl border  border-gray-700"
        >
          MOST TRENDING
        </Link>
      </div>
      <div className="flex justify-center items-center mt-10">
        <div className="bg-slate-500 lg:w-[50%]  rounded-full hover:w-[85%] duration-500">
          <h1 className=" text-3xl text-white text-center font-thin   p-3">
            {props.title}
          </h1>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-5">
        <div className=" lg:w-[85%] ">
          <AliceCarousel
            mouseTracking
            autoPlay
            autoPlayInterval={1000}
            infinite
            disableDotsControls
            disableButtonsControls
            items={items}
            responsive={responsive}
            controlsStrategy="alternate"
          />
        </div>
      </div>
      <div className="mt-5 flex flex-row justify-center items-center">
        <Link
          to={"/BrowseAll"}
          className="p-2 px-3  rounded-sm border border-gray-700 tracking-wider "
        >
          VIEW ALL
        </Link>
      </div>
    </div>
  );
};
export default BasicCarousels;
