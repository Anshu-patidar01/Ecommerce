import React, { useContext, useState } from "react";
import img1 from "../../../StaticData/images/manKurta/kurta111.jpg";
import img2 from "../../../StaticData/images/manKurta/kurta15.jpg";
import { UserContext } from "../../../Context/UserContex";
import axios from "axios";
function ProductView() {
  const { UserProduct, setUserProduct } = useContext(UserContext);
  // const {}
  const items = UserProduct.item;

  // console.log(items);
  const handleAddToCart = async (id) => {
    try {
      handleUpdateUser();
      // console.log(id);
      const token = localStorage.getItem("ecommerceToken");
      // console.log(token);
      if (!token) {
        console.log("token not provided.");
        return "token not provided.";
      }
      const response = await axios
        .post(
          process.env.VITE_API_GET_ALL_CART_API,
          {
            productId: id,
            quantity: 1,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          console.log("response of add to cart.", res);
          window.alert("Product Added to bag.");
        })
        .catch((res) => {
          console.log("error response of add to cart.", res);
          window.alert("some problem while Adding. Please try agian.");
        });
    } catch (error) {
      console.log("some problem while connecting to add to cart api.");
      window.alert("some problem while Adding. Please try agian.");
    }
  };
  const handleAddtoWishlist = async (id) => {
    try {
      // console.log(id);
      const token = localStorage.getItem("ecommerceToken");
      // console.log(token);
      if (!token) {
        console.log("token not provided.");
        return "token not provided.";
      }
      const response = await axios
        .post(
          "http://localhost:3000/user/wishlist",
          {
            productId: id,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          console.log("response of add to Wishlist.", res);
          window.alert("Product Added to Wishlist.");
        })
        .catch((res) => {
          console.log("error response of add to wishlist.", res);
          window.alert("some problem while Adding. Please try agian.");
        });
    } catch (error) {
      console.log("some problem while connecting to add to wishlist api.");
      window.alert("some problem while Adding. Please try agian.");
    }
  };
  const product = {
    name: items.title,
    price: items.price,
    href: "#",
    breadcrumbs: [
      { id: 1, name: "Admin", href: "#" },
      { id: 2, name: "Products", href: "#" },
      { id: 3, name: "Product", href: "#" },
    ],
    images: [
      {
        src: items.image,
        alt: "Two each of gray, white, and black shirts laying flat.",
      },
      {
        src: items.image,
        alt: "Model wearing plain black basic tee.",
      },
      {
        src: items.image,
        alt: "Model wearing plain gray basic tee.",
      },
      {
        src: items.image,
        alt: "Model wearing plain white basic tee.",
      },
    ],
    colors: [
      { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
      { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
    sizes: [
      { name: "XXS", inStock: false },
      { name: "XS", inStock: false },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
      { name: "2XL", inStock: true },
      { name: "3XL", inStock: false },
    ],
    description: items.description,
    highlights: [
      { name: "Brand", Brand: items.Brand },
      { name: "category", category: items.category },
      { name: "Offer", Offer: items.Offer },
      { name: "Discount", item: items.Discount },
      { name: "Bandwidth", Bandwidth: items.Bandwidth },
      { name: "Pattern", Pattern: items.Pattern },
      { name: "Length", Length: items.Length },
    ],
    details:
      items.Discount +
      " " +
      items.Brand +
      " " +
      items.Bandwidth +
      " " +
      items.category +
      " " +
      items.Pattern +
      " " +
      items.Length +
      " " +
      items.Offer,
  };
  const handleUpdateUser = () => {
    console.log(UserProduct);
  };
  return (
    <>
      <div className=" h-screen w-full flex flex-row">
        <div className="w-7/12 h-full bg-white ">
          <div className="w-full h-full gap-2 flex flex-row px-2 mt-5">
            <div className="w-6/12  rounded-lg h-[60%] bg-gray-600">
              <img
                className=" size-full rounded-lg object-cover block"
                src={product.images[0].src}
                alt={product.images[0].alt}
              />
            </div>
            <div className="w-6/12  rounded-lg h-[60%] bg-gray-600">
              <img
                className=" size-full rounded-lg object-cover block"
                src={product.images[1].src}
                alt={product.images[1].alt}
              />
            </div>
          </div>
        </div>
        <div className="w-5/12 h-8/12 flex flex-col gap-3 overflow-y-scroll bg-white p-5">
          <div className="flex flex-col gap-2 text-xl">
            <h1 className=" text-2xl  font-bold">{product.name}</h1>
            <h1 className=" text-gray-700 font-normal ">
              {product.description}
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
              <h1 className=" text-2xl font-bold">₹{product.price}</h1>
              <h1 className=" text-xl font-semibold text-gray-500 ">
                MRP <span className="line-through">₹{product.price * 2}</span>
              </h1>
              <h1 className=" text-lg text-orange-600 font-bold">
                {items.Discount}
              </h1>
            </div>
            <div>SELECT SIZE</div>
            <div className="flex flex-row gap-4 ">
              {product.sizes.map((itemx) => (
                <h1
                  key={itemx.name}
                  className="border-[1px] border-gray-500 rounded-sm  p-1 text-center hover:bg-gray-700 hover:text-white"
                >
                  <h1 className={!itemx.inStock && " line-through"}>
                    {itemx.name}
                  </h1>
                </h1>
              ))}
              {/* <h1 className="border-[1px] border-gray-500 rounded-sm w-5 text-center hover:bg-gray-700 hover:text-white">
                <h1>M</h1>
              </h1> */}
            </div>
            <div className=" flex flex-row gap-2">
              <button
                onClick={() => {
                  handleAddToCart(items._id);
                }}
                className="bg-gray-700 w-full opacity-80 text-white font-bold p-2 px-8 rounded-lg "
              >
                <span className=" text-lg">👜</span>ADD To Bag
              </button>
              <button
                onClick={() => {
                  handleAddtoWishlist(items._id);
                }}
                className="bg-gray-200 w-full opacity-80 text-black font-bold p-2 px-8 rounded-lg "
              >
                <span className=" text-2xl">💗</span>WISHLIST
              </button>
            </div>
          </div>
          <div>
            <div>
              <h1 className=" text-lg font-bold">
                {product.highlights[2].name}:
              </h1>
              <p className=" text-green-600 font-semibold">
                {product.highlights[2].Offer + 10}
                <span className=" line-through text-orange-600">
                  {product.highlights[2].Offer}
                </span>
              </p>
            </div>
            <div>
              <h1 className=" text-lg font-bold">
                {" "}
                {product.highlights[0].name}:
              </h1>
              <p className="text-">{product.highlights[0].Brand}</p>
            </div>
            <div>
              <h1 className=" text-lg font-bold"> Color:</h1>
              <p className="text-lg">"Yellow"</p>
              <p className="text-lg">"Red"</p>
              <p className="text-lg">"Original"</p>
            </div>
            <div>
              <h1 className=" text-lg font-extrabold">Product Details 🛍️</h1>
              <div className="">
                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{product.details}</p>
                </div>
              </div>
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
