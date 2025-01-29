import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "../../customer/pages/footer/Footer";
import OrderList from "./OrderList";

function Order() {
  return (
    <div className="bg-gray-600 ">
      <div>
        <Navbar />
      </div>
      <div className="p-3">
        <div>
          <h1 className=" text-3xl text-center text-white font-bold ml-8 p-5">
            All Orders
          </h1>
        </div>
        <div className="h-auto w-full overflow-x-scroll  rounded-[5rem] shadow-2xl bg shadow-gray-900 p-8">
          <OrderList />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Order;
