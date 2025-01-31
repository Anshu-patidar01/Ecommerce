import React, { useEffect, useState } from "react";
import FilterList from "../FilterList/FilterList";
import Product from "../../../StaticData/Mens";
import FullCard from "../FullCard/FullCard";
import axios from "axios";

function BrowseAllcompo(props) {
  const [IsVisible, setIsVisible] = useState(true);

  const handleHideDiv = () => {
    IsVisible ? setIsVisible(false) : setIsVisible(true);
  };
  const [product, setproducts] = useState([]);
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
  return (
    <div className="flex flex-row w-full h-full">
      <div
        className={`w-3/12 ${
          IsVisible && props.filterSection ? "w-3/12" : "w-1"
        } `}
      >
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
            IsVisible && props.filterSection ? "block" : "hidden"
          } overflow-y-scroll w-full h-full`}
        >
          {/* //Filter selection */}

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
          IsVisible && props.filterSection ? "grid-cols-4" : "grid-cols-5"
        }  w-full  overflow-y-scroll ml-10 grid  gap-2`}
      >
        {/* {Product.filter((item) => item.Category == "Shirts").map((item) => ( */}
        {product.map((item, index) => (
          <div key={index} className="w-[12rem]">
            <FullCard
              productImage={item.image}
              productTitle={item.title}
              productCategory={item.category}
              productBrand={item.Brand}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrowseAllcompo;
