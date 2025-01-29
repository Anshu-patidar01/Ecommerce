import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "../../customer/pages/footer/Footer";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import axios from "axios";
import PopUpMessage from "./PopUpMessage";
function AddProduct() {
  const [product, setProduct] = useState({
    title: "",
    category: "",
    Brand: "",
    description: "",
    price: "",
    Discount: "",
    Offer: "",
    Color: "",
    size: "",
    Pattern: "",
    Length: "",
    Bandwidth: "",
    image: "",
  });
  // PopUp messages
  const [showMessage, setShowMessage] = useState(false);
  const [PopUpmessage, setPopUpmessage] = useState({
    message: "",
    style: "bg-green-500",
  });
  const handleShowMessage = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false); // Hide the message after 5 seconds
    }, 5000);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(product);
    const formData = new FormData();
    // Append all product fields
    for (const key in product) {
      formData.append(key, product[key]);
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/admin/addProduct",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      const data = response.data;
      console.log(data);
      const ResMessage = data.message;
      if (ResMessage) {
        console.error(ResMessage);
        setPopUpmessage({
          message: ResMessage,
          style: "bg-red-500",
        });
        handleShowMessage();
      } else {
        // console.log("anshu boss");
        console.log("Product added successfully:", data);
        setPopUpmessage({
          message: "Product Added Successfully",
          style: "bg-green-500",
        });
        handleShowMessage();
      }

      // console.log(data);
    } catch (error) {
      console.error("Error:there is a error", error);
    }
  };

  return (
    <div className="bg-gray-600">
      <div>
        <Navbar />
      </div>
      <div className="p-3">
        <div>
          <h1 className=" text-3xl text-white font-bold ml-8 p-5">
            Add New Product
          </h1>

          {/* PopUp meassage UI */}
          <div className="">
            {/* <button
              onClick={handleShowMessage}
              className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
            >
              Show Message
            </button> */}

            {showMessage && (
              <div
                className={`fixed top-4 right-4  ${PopUpmessage.style} text-white p-4 rounded shadow-lg w-64`}
              >
                <p>{PopUpmessage.message}</p>
                {/* Decreasing Line with Animation */}
              </div>
            )}
          </div>
          {/* PopUp meassage UI */}
        </div>
        <div className="w-full h-auto  rounded-[5rem] shadow-2xl bg-gray-600 text-white shadow-gray-900">
          <div className="p-20">
            <form>
              <div className="space-y-12">
                <div className="border-b border-gray-100/10 pb-12">
                  <h2 className=" text-lg font-semibold text-white">
                    Product Information
                  </h2>
                  <p className="mt-1 text-sm/6 text-gray-600">
                    This Product will be displayed publicly so be careful what
                    you share.
                  </p>

                  <div className="mt-10 ">
                    <div className="sm:col-span-4 ">
                      <label
                        htmlFor="title"
                        className="block text-sm/6 font-medium text-white"
                      >
                        PRODUCT TITLE
                      </label>
                      <div className="mt-2">
                        <div className="flex  items-center rounded-md bg-gray-300 pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                          <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
                            {"->"}
                          </div>
                          <input
                            id="title"
                            type="text"
                            name="title"
                            value={product.title}
                            onChange={handleChange}
                            placeholder="Amiri"
                            className="block   min-w-0 grow py-1.5 pr-3 pl-1 text-base text-black placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="border-b border-gray-100 pb-12">
                      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                          <label
                            htmlFor="category"
                            className="block text-sm/6 font-medium text-white"
                          >
                            CATEGORY
                          </label>
                          <div className="mt-2 grid grid-cols-1">
                            <select
                              id="category"
                              name="category"
                              value={product.category}
                              onChange={handleChange}
                              className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-gray-300 py-1.5 pr-8 pl-3 text-base text-black outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            >
                              <option>Select CATEGORY</option>
                              <option>Men's Clothing</option>
                              <option>Kid's Wear</option>
                              <option>Footwear</option>
                              <option>Casual Wear</option>
                              <option>Formal Wear</option>
                              <option>Sport Wear</option>
                              <option>Winter Wear</option>
                            </select>
                            <ChevronDownIcon
                              aria-hidden="true"
                              className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                            />
                          </div>
                        </div>
                        <div className="sm:col-span-4">
                          <label
                            htmlFor="brand"
                            className="block text-sm/6 font-medium text-white"
                          >
                            BRAND{" "}
                          </label>
                          <div className="mt-2">
                            <input
                              id="brand"
                              type="email"
                              name="Brand"
                              value={product.Brand}
                              onChange={handleChange}
                              className="block w-full rounded-md bg-gray-300 px-3 py-1.5 text-black  outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                          </div>
                        </div>

                        <div className="col-span-full">
                          <label
                            htmlFor="description"
                            className="block text-sm/6 font-medium text-white"
                          >
                            DESCRIPTION
                          </label>
                          <div className="mt-2">
                            <input
                              id="description"
                              type="text"
                              name="description"
                              value={product.description}
                              onChange={handleChange}
                              autoComplete="street-address"
                              className="block w-full rounded-md bg-gray-300 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-2 sm:col-start-1">
                          <label
                            htmlFor="price"
                            className="block text-sm/6 font-medium text-white"
                          >
                            PRICE
                          </label>
                          <div className="mt-2">
                            <input
                              id="price"
                              type="text"
                              name="price"
                              value={product.price}
                              onChange={handleChange}
                              autoComplete="address-level2"
                              className="block w-full rounded-md bg-gray-300 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-3">
                          <label
                            htmlFor="discount"
                            className="block text-sm/6 font-medium text-white"
                          >
                            DISCOUNT
                          </label>
                          <div className="mt-2 grid grid-cols-1">
                            <select
                              name="Discount"
                              value={product.Discount}
                              onChange={handleChange}
                              className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-gray-300 py-1.5 pr-8 pl-3 text-base text-black outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            >
                              <option>Select DISCOUNT</option>
                              <option>10%OFF</option>
                              <option>20%OFF</option>
                              <option>30%OFF</option>
                              <option>40%OFF</option>
                              <option>50%OFF</option>
                              <option>60%OFF</option>
                              <option>70%OFF</option>
                              <option>80%OFF</option>
                            </select>
                            <ChevronDownIcon
                              aria-hidden="true"
                              className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-3">
                          <label className="block text-sm/6 font-medium text-white">
                            OFFERS
                          </label>
                          <div className="mt-2 grid grid-cols-1">
                            <select
                              name="Offer"
                              value={product.Offer}
                              onChange={handleChange}
                              className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-gray-300 py-1.5 pr-8 pl-3 text-base text-black outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            >
                              <option>Select OFFERS</option>
                              <option>Flat 50% Off</option>
                              <option>Buy 1 Gey 1 Free</option>
                              <option>
                                Save Rs.200 on Orders Above Rs.999
                              </option>
                              <option>Extra 10% Off on Frist Purches</option>
                              <option>Free Shipping</option>
                              <option>Festive Sale: Up to 70% Off</option>
                              <option>Combo Offer:Buy 2 and Get 15%Off</option>
                            </select>
                            <ChevronDownIcon
                              aria-hidden="true"
                              className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-3">
                          <label className="block text-sm/6 font-medium text-white">
                            COLORE
                          </label>
                          <div className="mt-2 grid grid-cols-1">
                            <select
                              name="Color"
                              value={product.Color}
                              onChange={handleChange}
                              className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-gray-300 py-1.5 pr-8 pl-3 text-base text-black outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            >
                              <option>Select COLORE</option>
                              <option>RED</option>
                              <option>YELLOW</option>
                              <option>BLUE</option>
                              <option>WHITE</option>
                              <option>PINK</option>
                              <option>PURPLE</option>
                              <option>BLACK</option>
                              <option>ORANGE</option>
                              <option>GRAY</option>
                            </select>
                            <ChevronDownIcon
                              aria-hidden="true"
                              className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                            />
                          </div>
                        </div>
                        <div className="sm:col-span-3">
                          <label className="block text-sm/6 font-medium text-white">
                            SIZE
                          </label>
                          <div className="mt-2 grid grid-cols-1">
                            <select
                              name="size"
                              value={product.size}
                              onChange={handleChange}
                              className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-gray-300 py-1.5 pr-8 pl-3 text-base text-black outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            >
                              <option>Select SIZE</option>
                              <option>S</option>
                              <option>M</option>
                              <option>L</option>
                              <option>XL</option>
                              <option>XXL</option>
                              <option>XXXL</option>
                            </select>
                            <ChevronDownIcon
                              aria-hidden="true"
                              className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                            />
                          </div>
                        </div>
                        <div className="sm:col-span-3">
                          <label
                            htmlFor="country"
                            className="block text-sm/6 font-medium text-white"
                          >
                            PATTERN
                          </label>
                          <div className="mt-2 grid grid-cols-1">
                            <select
                              name="Pattern"
                              value={product.Pattern}
                              onChange={handleChange}
                              className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-gray-300 py-1.5 pr-8 pl-3 text-base text-black outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            >
                              <option>Select PATTERN</option>
                              <option>Solid</option>
                              <option>Striped</option>
                              <option>Checked</option>
                              <option>Printed</option>
                              <option>Polka Dot</option>
                              <option>Tie-Dye</option>
                            </select>
                            <ChevronDownIcon
                              aria-hidden="true"
                              className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                            />
                          </div>
                        </div>
                        <div className="sm:col-span-2 sm:col-start-1">
                          <label className="block text-sm/6 font-medium text-white">
                            LENGTH
                          </label>
                          <div className="mt-2">
                            <input
                              type="text"
                              name="Length"
                              value={product.Length}
                              onChange={handleChange}
                              className="block w-full rounded-md bg-gray-300 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                          </div>
                        </div>
                        <div className="sm:col-span-2 sm:col-start-1">
                          <label className="block text-sm/6 font-medium text-white">
                            Bandwidth
                          </label>
                          <div className="mt-2">
                            <input
                              type="text"
                              name="Bandwidth"
                              value={product.Bandwidth}
                              onChange={handleChange}
                              className="block w-full rounded-md bg-gray-300 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 
                    <div className="col-span-full">
                      <label
                        htmlFor="about"
                        className="block text-sm/6 font-medium text-white"
                      >
                        About
                      </label>
                      <div className="mt-2">
                        <textarea
                          id="about"
                          name="about"
                          rows={3}
                          className="block w-full rounded-md bg-gray-300 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                          defaultValue={""}
                        />
                      </div>
                      <p className="mt-3 text-sm/6 text-gray-600">
                        Write a few sentences about yourself.
                      </p>
                    </div> */}

                    <div className="col-span-full bg-slate-600">
                      <label className="block text-sm/6 font-medium text-white text-center">
                        Cover photo
                      </label>
                      <div className="sm:col-span-2 sm:col-start-1">
                        <label className="block text-sm/6 font-medium text-white">
                          Link
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="image"
                            value={product.image}
                            onChange={handleChange}
                            className="block w-full rounded-md bg-gray-300 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                          />
                        </div>
                      </div>
                      <div>OR</div>
                      <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-100 px-6 py-10">
                        <div className="text-center">
                          <PhotoIcon
                            aria-hidden="true"
                            className="mx-auto size-12 text-gray-300"
                          />
                          <div className="mt-4 flex text-sm/6 text-gray-600">
                            <label className="relative cursor-pointer rounded-md bg-gray-300 font-semibold text-indigo-600 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:outline-hidden hover:text-indigo-500">
                              <span>Upload a file</span>
                              <input
                                type="file"
                                className="sr-only text-white"
                                name="coverPhoto"
                              />
                            </label>
                            <p className="pl-1 text-white">or drag and drop</p>
                          </div>
                          <p className="text-xs/5 text-white">
                            PNG, JPG, GIF up to 10MB
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                  type="button"
                  className="text-sm/6 font-semibold text-white"
                >
                  Cancel
                </button>
                <button
                  onClick={(e) => {
                    handleSubmit(e);
                  }}
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default AddProduct;
