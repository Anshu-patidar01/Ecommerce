import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

const ProtectedRoute = ({ children, role }) => {
  const [isAuthorized, setIsAuthorized] = useState(null);

  useEffect(() => {
    const validateToken = async () => {
      const token = Cookies.get("token");
      console.log(token);
      // if (!token) {
      //   setIsAuthorized(false);
      //   return;
      // }
      // try {
      //   const response = await axios.post("/validate-token", { token });
      //   if (response.data.valid && response.data.role === role) {
      //     setIsAuthorized(true);
      //   } else {
      //     setIsAuthorized(false);
      //   }
      // } catch (error) {
      //   console.error("Token validation error:", error);
      //   setIsAuthorized(false);
      // }
    };

    validateToken();
  }, [role]);

  if (isAuthorized === null) {
    return <div>Loading...</div>;
  }

  return isAuthorized ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
