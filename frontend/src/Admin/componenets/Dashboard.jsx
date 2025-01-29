import React, { useContext } from "react";
import Navbar from "./Navbar";
import Footer from "../../customer/pages/footer/Footer";
import OrderList from "./OrderList";
import ProductList from "./ProductList";

function Dashboard() {
  return (
    <div className="bg-gray-600">
      <div>
        <Navbar />
      </div>
      <div className="flex flex-row w-full">
        <div className="p-3 w-full">
          <div className="w-full">
            <h1 className=" text-3xl text-white font-bold ml-8 p-5">
              Dashboard
            </h1>
          </div>
          <div className="w-full   rounded-[5rem] shadow-2xl p-10 shadow-gray-900">
            <div>
              <img
                className="w-full"
                src="https://res.cloudinary.com/dnvuqvgp8/image/upload/v1737818407/Screenshot_2025-01-25_203415_hp6jtr.png"
                alt="not found"
              />
              <div>
                <div className="bg-gray-700 rounded-3xl mt-7 text-center text-white text-3xl font-bold">
                  <h1 className="p-4">Orders</h1>
                </div>
                <div className=" overflow-x-scroll">
                  <OrderList />
                </div>
              </div>
              <div>
                <div className="bg-gray-700 rounded-3xl mt-7 text-center text-white text-3xl font-bold">
                  <h1 className="p-4">Products</h1>
                </div>
                <div className=" overflow-x-scroll">
                  <ProductList />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Dashboard;
