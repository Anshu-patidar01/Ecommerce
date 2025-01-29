import React, { useEffect, useState } from "react";
import FullCard from "../../components/FullCard/FullCard";
import Navigation from "../../components/Navigation/Navigation";
import Product from "../../../StaticData/Mens";
import FilterList from "../../components/FilterList/FilterList";
import Footer from "../footer/Footer";
import OfferTimer from "../../components/OfferTimer/OfferTimer";
import BrowseAllcompo from "../../components/BrowseAllcompo/BrowseAllcompo";
function BrowseAll() {
  const [IsVisible, setIsVisible] = useState(true);

  const handleHideDiv = () => {
    IsVisible ? setIsVisible(false) : setIsVisible(true);
  };

  return (
    <div>
      <div className="">
        <Navigation />
      </div>
      {/* <div className=" bg-blue-500 opacity-60 font-black text-4xl text- h-16 w-full">
      </div> */}
      <OfferTimer />
      <div className="flex flex-row w-full h-screen">
        <BrowseAllcompo filterSection={true} />
        {/* <div className={`w-3/12 ${IsVisible ? "w-3/12" : "w-1"} `}>
          <div className=" flex flex-row w-full justify-end text-lg items-start h-5">
            <button
              onClick={() => handleHideDiv()}
              className={`transition-transform duration-200 ease-in-out transform hover:scale-150 cursor-pointer`}
            >
              ⬅️
            </button>
          </div>
          <div
            className={` ${
              IsVisible ? "block" : "hidden"
            } overflow-y-scroll w-full h-full`}
          >

            <FilterList />
          </div>
        </div>
        <div className="">
          {IsVisible ? (
            ""
          ) : (
            <button
              onClick={() => handleHideDiv()}
              className=" transition-transform text-2xl duration-200 ease-in-out transform hover:scale-150 cursor-pointer"
            >
              ➡️
            </button>
          )}
        </div>

        <div
          className={` ${
            IsVisible ? "grid-cols-4" : "grid-cols-5"
          }  w-full  overflow-y-scroll ml-10 grid  gap-2`}
        >
          {Product.map((item) => (
            <div key={item.ID} className="w-[12rem]">
              <FullCard
                productImage={item.MainImage}
                productTitle={item.Title}
                productCategory={item.Category}
                productBrand={item.Brand}
              />
            </div>
          ))}
        </div> */}
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default BrowseAll;
