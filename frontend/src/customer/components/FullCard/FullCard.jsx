import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../Context/UserContex";

function FullCard(props) {
  const navigat = useNavigate();
  const item = {
    title: props.productTitle,
    category: props.productCategory,
    description: props.productdescription,
    price: props.productPrice,
    size: props.productsize,
    image: props.productImage,
    Discount: props.productOffer,
    Brand: props.productBrand,
    Bandwidth: props.productBandwidth,
    Color: props.productColor,
    Pattern: props.productPattern,
    Length: props.productLength,
    Offer: props.productOffer,
    _id: props.product_id,
  };
  // console.log(item);
  const { UserProduct, setUserProduct } = useContext(UserContext);
  return (
    <>
      <a className=" flex flex-col justify-center text-sm rounded-sm cursor-pointer  w-[12rem] h-[20rem] group ">
        <div className="w-full h-[55%]">
          <img
            onClick={() => {
              setUserProduct({ item: item });
              navigat("/product");
            }}
            src={props.productImage}
            className=" rounded-sm w-full h-full transition-transform duration-500 ease-in-out transform hover:scale-110 hover:rounded-lg  opacity-100 object-cover object-top "
            alt=""
          />
        </div>
        <div className=" text-black p-1">
          <h1>
            {props.productTitle}+{props.item}
          </h1>
          <div className="flex flex-row gap-2">
            <h1>{props.productBrand}</h1>
          </div>
          <div className="flex flex-row gap-2">
            <div>
              <h1 className=" font-black">{props.productPrice}</h1>
            </div>
            <div>
              <h1 className=" line-through text-red-700 font-black">
                {props.productPrice * 2}
              </h1>
            </div>
            <div>
              <h1 className=" text-green-700 font-black">
                {props.productOffer}
              </h1>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button className="bg-gray-700 w-full opacity-80 text-white font-bold p-2 px-8 rounded-lg ">
              ADD To Bag <span className=" text-lg">👜</span>
            </button>
          </div>
        </div>
      </a>
    </>
  );
}
export default FullCard;
