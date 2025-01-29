import React from "react";
import img1 from "../../../StaticData/images/manKurta/kurta111.jpg";
import img2 from "../../../StaticData/images/manKurta/kurta15.jpg";
function ProductView() {
  return (
    <>
      <div className=" h-screen w-full flex flex-row">
        <div className="w-7/12 h-full bg-white ">
          <div className="w-full h-full gap-2 flex flex-row px-2 mt-5">
            <div className="w-6/12 h-[60%] bg-gray-600">
              <img src={img1} alt="img1" />
            </div>
            <div className="w-6/12 h-[60%] bg-gray-600">
              <img src={img1} alt="img2" />
            </div>
          </div>
        </div>
        <div className="w-5/12 h-8/12 flex flex-col gap-3 overflow-y-scroll bg-white p-5">
          <div className="flex flex-col gap-2 text-xl">
            <h1 className=" text-2xl  font-bold">Title</h1>
            <h1 className=" text-gray-700 font-normal ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perspiciatis, quo.
            </h1>

            <div className=" flex flex-row border-[1px] p-1 text-sm w-36">
              <h1>4.4⭐</h1>
              <span className="bg-gray-300 h-full w-[1px] "></span>
              <h1 className="ml-[2px]">1.3K Ratings</h1>
            </div>
          </div>
          <span className="w-full h-[1px] bg-gray-300"></span>
          <div className="flex flex-col gap-5">
            <div className="flex flex-row items-center gap-2">
              <h1 className=" text-2xl font-bold">Rs.599</h1>
              <h1 className=" text-xl font-semibold text-gray-500 ">
                MRP <span className="line-through">Rs.1099</span>
              </h1>
              <h1 className=" text-lg text-orange-600 font-bold">
                {"(49% OFF)"}
              </h1>
            </div>
            <div>SELECT SIZE</div>
            <div className="flex flex-row gap-2 ">
              <h1 className="border-[1px] border-gray-500 rounded-sm w-5 text-center hover:bg-gray-700 hover:text-white">
                <h1>M</h1>
              </h1>
              <h1 className="border-[1px] border-gray-500 rounded-sm w-5 text-center hover:bg-gray-700 hover:text-white">
                L
              </h1>
              <h1 className="border-[1px] border-gray-500 rounded-sm w-5 text-center hover:bg-gray-700 hover:text-white">
                XL
              </h1>
            </div>
            <div className=" flex flex-row gap-2">
              <button className="bg-gray-700 w-full opacity-80 text-white font-bold p-2 px-8 rounded-lg ">
                <span className=" text-lg">👜</span>ADD To Bag
              </button>
              <button className="bg-gray-200 w-full opacity-80 text-black font-bold p-2 px-8 rounded-lg ">
                <span className=" text-2xl">💗</span>WISHLIST
              </button>
            </div>
          </div>
          <div>
            <div>
              <h1 className=" text-lg font-bold">Offer:</h1>
              <p className=" text-green-600 font-semibold">
                49% OFF{" "}
                <span className=" line-through text-orange-600">39% OFF</span>
              </p>
            </div>
            <div>
              <h1 className=" text-lg font-bold"> Brand</h1>
              <p className="text-">Uniqlo</p>
            </div>
            <div>
              <h1 className=" text-lg font-bold"> Color:</h1>
              <p className="text-lg">"Yellow"</p>
              <p className="text-lg">"Red"</p>
              <p className="text-lg">"Original"</p>
            </div>
            <div>
              <h1 className=" text-lg font-extrabold">Product Details 🛍️</h1>
              <p>
                Charcoal Grey solid lounge tshirt, has a round neck and long
                sleeves This t-shirt comes with Smart Tech+ feature that gives
                you superior performance without compromising on comfort. Ideal
                for both leisure and outdoor activities. The Smart Tech+
                technology draws perspiration from the skin, keeping the body
                cool, dry and comfortable. Coupled with anti-stat technology and
                extra soft hand-feel, this feature gives you all-day comfort.
                The stain removal feature makes the t-shirt easy to maintain.
              </p>
            </div>
            <div>
              <h1 className=" text-lg font-extrabold">Material & Care🛒</h1>
              <p>
                Cotton <br /> Machine
                <br /> wash Cold-gentle
                <br /> cycle <br />
                Do not bleach
                <br /> Tumble
                <br /> dry
                <br /> low Gentle
                <br /> cycle
                <br /> Low heat
                <br /> Do not wring <br />
                Do not iron on print <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductView;
