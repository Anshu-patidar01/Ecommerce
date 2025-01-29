import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../componenets/Dashboard";
import Order from "../componenets/Order";
import AddProduct from "../componenets/AddProduct";
import Product from "../componenets/Product";
import { AdminProvider } from "../../Context/AdminContext.jsx";
import ProductList from "../componenets/ProductList.jsx";
import ProductPage from "../pages/ProductPage.jsx";
function AdminRouter() {
  return (
    <AdminProvider>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/products" element={<Product />} />
        <Route path="/product" element={<ProductPage />} />
      </Routes>
    </AdminProvider>
  );
}

export default AdminRouter;
