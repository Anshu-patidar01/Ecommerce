import React from "react";

function FullCard(props) {
  return (
    <>
      <a className=" flex flex-col justify-center text-sm rounded-sm cursor-pointer  w-[12rem] h-[20rem] group ">
        <div className="w-full h-[55%]">
          <img
            src={props.productImage}
            className=" rounded-sm w-full h-full transition-transform duration-500 ease-in-out transform hover:scale-110 hover:rounded-lg  opacity-100 object-cover object-top "
            alt=""
          />
        </div>
        <div className=" text-black p-1">
          <h1>{props.productTitle}</h1>
          <div className="flex flex-row gap-2">
            <h1>{props.productBrand}</h1>
          </div>
          <div className="flex flex-row gap-2">
            <div>
              <h1 className=" font-black">Rs.99</h1>
            </div>
            <div>
              <h1 className=" line-through text-red-700 font-black">Rs.2</h1>
            </div>
            <div>
              <h1 className=" text-green-700 font-black">2% OFF</h1>
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
