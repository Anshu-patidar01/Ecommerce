import React, { createContext, useEffect, useState } from "react";

//create a context
export const UserContext = createContext();

//create a provider Component
export const UserProvider = ({ children }) => {
  const [UserProduct, setUserProduct] = useState({
    item: {
      title: "was",
      category: "Man Kurta's",
      description: "aks zdget sxfhsbd mcdhc jdfm",
      price: "299",
      size: "M",
      image:
        "https://sslimages.shoppersstop.com/sys-master/images/hb2/h08/33278699962398/S24M-TRTSHK546_OFF-WHITE.jpg_2000Wx3000H",
      Discount: "50% OFF",
      Brand: "Shreeram",
      Bandwidth: "xyz",
      Color: "White",
      Pattern: "printed",
      Length: "ASDS",
      Offer: "Not Available",
    },
  });
  const [User, setUser] = useState("");

  return (
    <UserContext.Provider
      value={{ UserProduct, setUserProduct, User, setUser }}
    >
      {children}
    </UserContext.Provider>
  );
};
