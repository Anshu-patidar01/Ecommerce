import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AdminContext } from "../../Context/AdminContext";
import { Link } from "react-router-dom";

function ProductList() {
  const [products, setproducts] = useState([]);
  const { Product, setProduct } = useContext(AdminContext);
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
    <div>
      <div className="p-6 ">
        <table className="table-auto bg-gray-700  w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">INDEX</th>
              <th className="border border-gray-300 px-4 py-2">PRODUCT</th>
              <th className="border border-gray-300 px-4 py-2">TITLE</th>
              <th className="border border-gray-300 px-4 py-2">PRICE</th>
              <th className="border border-gray-300 px-4 py-2">SIZE</th>
              <th className="border border-gray-300 px-4 py-2">BRAND</th>
              <th className="border border-gray-300 px-4 py-2">COLORE</th>
              <th className="border border-gray-300 px-4 py-2">CATEGORY</th>
              <th className="border border-gray-300 px-4 py-2">DETAILS</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, index) => (
              <React.Fragment key={item._id}>
                <tr className="hover:bg-gray-500 text-white cursor-pointer hover:text-black text-center">
                  <td className="border  border-gray-300 px-4 py-2">
                    {index + 1}
                  </td>
                  <td className="border  border-gray-300 px-4 py-2">
                    <img src={item.image} width={"50px"} alt="" />
                  </td>
                  <td className="border  border-gray-300 px-4 py-2">
                    {item.title}
                  </td>
                  <td className="border  border-gray-300 px-4 py-2">
                    {item.price}
                  </td>
                  <td className="border  border-gray-300 px-4 py-2">
                    {item.size}
                  </td>
                  <td className="border  border-gray-300 px-4 py-2">
                    {item.Brand}
                  </td>
                  <td className="border  border-gray-300 px-4 py-2">
                    {item.Color}
                  </td>

                  <td className="border border-gray-300 p-2 ">
                    {item.category}
                  </td>
                  <td className="border border-gray-300 text-white cursor-pointer ">
                    <Link
                      to={"/admin/product"}
                      onClick={() => {
                        setProduct({ item });
                        console.log(Product);
                      }}
                      className="flex justify-center transform hover:scale-150 transition duration-500"
                    >
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
                    </Link>
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductList;
