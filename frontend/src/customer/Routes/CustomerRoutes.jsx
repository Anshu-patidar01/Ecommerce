import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import BrowseAll from "../pages/BrowseAll/BrowseAll";
import ProductOverview from "../pages/ProductOverView/ProductOverview";
import Bag from "../pages/BagPages/Bag";

function CustomerRoutes() {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/BrowseAll" element={<BrowseAll />} />
      <Route path="/Product" element={<ProductOverview />} />
      <Route path="/bag" element={<Bag />} />
    </Routes>
  );
}

export default CustomerRoutes;
