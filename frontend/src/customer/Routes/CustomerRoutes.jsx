import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import BrowseAll from "../pages/BrowseAll/BrowseAll";
import ProductOverview from "../pages/ProductOverView/ProductOverview";
import Bag from "../pages/BagPages/Bag";
import ProtectedRoute from "../../Routes/ProtectedRoute";
import Notfound from "../components/Notfound";
import { UserProvider } from "../../Context/UserContex";

function CustomerRoutes() {
  const token = localStorage.getItem("ecommerceToken");
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } else if (token === "") {
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } else {
    }
  }, []);

  return (
    // <UserProvider>
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/*" element={<Notfound />} />
      <Route
        path="/BrowseAll"
        element={
          <ProtectedRoute to="BrowseAll">
            <BrowseAll />
          </ProtectedRoute>
        }
      />
      <Route path="/product" element={<ProductOverview />} />
      <Route path="/bag" element={<Bag />} />
    </Routes>
    // </UserProvider>
  );
}

export default CustomerRoutes;
