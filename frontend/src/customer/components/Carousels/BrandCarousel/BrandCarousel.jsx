import React from "react";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";
import "react-alice-carousel/lib/alice-carousel.css";
import MansItem from "../../../../StaticData/Mens";
import MiniCard from "../../MiniCardCarousel/MiniCard";
import BrandCard from "../../MiniCardCarousel/BrandCards";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 4 },
};
const items = MansItem.filter((itemx) => itemx.Category == "Men Kurtas").map(
  (items) => {
    return (
      <BrandCard
        key={items.ID}
        itemsTitle={items.Title}
        discription={items.Description}
        image={items.MainImage}
      />
      // <MiniCard
      //   key={items.ID}
      //   itemsTitle={items.Title}
      //   discription={items.Description}
      //   image={items.MainImage}
      // />
    );
  }
);

function BrandCarousel(props) {
  return (
    <div className="mt-20">
      <div className="flex justify-center items-center">
        <div className=" rounded-full lg:w-[85%]">
          <h1 className=" text-4xl text-center font-thin p-3 ">
            {props.title}
          </h1>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
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
}

export default BrandCarousel;
