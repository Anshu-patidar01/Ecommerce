import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "../../customer/pages/footer/Footer";
import ProductList from "./ProductList";
function Product() {
  return (
    <div className="bg-gray-600">
      <div>
        <Navbar />
      </div>
      <div className="p-3">
        <div>
          <h1 className=" text-3xl text-center text-white font-bold ml-8 p-5">
            Products
          </h1>
        </div>
        <div className="h-auto w-full  overflow-x-scroll   rounded-[5rem] shadow-2xl bg shadow-gray-900 p-8">
          <ProductList />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Product;
