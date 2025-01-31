import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ScrollToTop from "../customer/components/ScrollToTop/ScrollToTop";
import AdminRouter from "../Admin/Router/AdminRouter";
import Notfound from "../customer/components/Notfound";
import CustomerRoutes from "../customer/Routes/CustomerRoutes";
import LoginPage from "../customer/pages/AuthPage/LoginPage";
import RegisterPage from "../customer/pages/AuthPage/RegisterPage";
import ProtectedRoute from "./ProtectedRoute";
function MainRoute() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* /Custumer Routes/ */}
        <Route path="/*" element={<CustomerRoutes />} />
        {/* //admin Routes */}
        <Route
          path="/admin/*"
          element={
            <ProtectedRoute to="admin">
              <AdminRouter />
            </ProtectedRoute>
          }
        />
        {/* user not found route */}
        <Route path="/NoN" element={<Notfound />} />
        {/* login page */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default MainRoute;
