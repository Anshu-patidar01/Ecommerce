import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "../../customer/pages/footer/Footer";
import axios from "axios";

function OrderList() {
  const [products, setproducts] = useState([]);
  const getProductData = async () => {
    try {
      // const res = await axios.get("http://localhost:3000/user/order");
      const res = await axios.get(process.env.VITE_API_ALL_ORDERS);
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
    <div>
      <div className="p-6">
        {/* main table */}
        <table className="table-auto bg-gray-700  w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">OID</th>
              <th className="border border-gray-300 px-4 py-2">USER</th>
              <th className="border border-gray-300 px-4 py-2">PRODUCT</th>
              <th className="border border-gray-300 px-4 py-2">CATEGORY</th>
              <th className="border border-gray-300 px-4 py-2">PRICE</th>
              <th className="border border-gray-300 px-4 py-2">QUANTITY</th>
              <th className="border border-gray-300 px-4 py-2">TOTAL AMOUNT</th>
              <th className="border border-gray-300 px-4 py-2">ACTION</th>
              <th className="border border-gray-300 px-4 py-2">DETAILS</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item) => (
              <React.Fragment key={item._id}>
                {item.items.map((order, index) => (
                  <tr
                    className="hover:bg-gray-500 text-white cursor-pointer hover:text-black text-center"
                    key={index}
                  >
                    {/* Show UID only for the first row */}
                    {index === 0 && (
                      <td
                        className="border  border-gray-300 px-4 py-2"
                        rowSpan={item.items.length}
                      >
                        {item._id}
                      </td>
                    )}
                    {index === 0 && (
                      <td
                        className="border  border-gray-300 px-4 py-2"
                        rowSpan={item.items.length}
                      >
                        {item.userId.basicInfo.fullName.firstName}
                      </td>
                    )}
                    <td className="border  border-gray-300 px-4 py-2">
                      {order.productId.title}
                    </td>
                    <td className="border  border-gray-300 px-4 py-2">
                      {order.productId.category}
                    </td>
                    <td className="border  border-gray-300 px-4 py-2">
                      {order.productId.price}
                    </td>
                    <td className="border  border-gray-300 px-4 py-2">
                      {order.quantity}
                    </td>
                    {index === 0 && (
                      <td
                        className="border  border-gray-300 px-4 py-2"
                        rowSpan={item.items.length}
                      >
                        {item.totalAmount}
                      </td>
                    )}

                    <td className="border border-gray-300 p-2 ">
                      <div className=" flex flex-row gap-2 justify-center">
                        <button className="  cursor-pointer p-2 px-4 bg-green-600 hover:bg-green-500  transform hover:scale-110 transition duration-500 rounded-2xl text-white font-semibold ">
                          Accept
                        </button>
                        <button className="  cursor-pointer p-2 px-4 bg-red-600 hover:bg-red-500 transform hover:scale-110 transition duration-500 rounded-2xl text-white font-semibold ">
                          Delete
                        </button>
                      </div>
                    </td>
                    <td className="border border-gray-300 text-white cursor-pointer ">
                      <div className="flex justify-center transform hover:scale-150 transition duration-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                          />
                        </svg>
                      </div>
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>

        {/* main table */}
      </div>
    </div>
  );
}

export default OrderList;
