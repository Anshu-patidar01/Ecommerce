import React from "react";

function Footer() {
  return (
    <div className="mt-28">
      <hr />
      <footer className="p-6 bg-gray-600 text-white  rounded-tr-[15rem] rounded-br-[15rem] hover:rounded-tl-[15rem] hover:rounded-bl-[15rem] hover:rounded-tr-none hover:rounded-br-none duration-500">
        <div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
          <div className="flex flex-col justify-center mr-10 items-center space-y-4">
            <h1 className=" text-4xl font-black ">FashionHub🛒🛍️</h1>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="font-medium">Clothing</h2>
            <div className="flex flex-col space-y-2 text-sm dark:text-white">
              <a rel="noopener noreferrer" href="#">
                Tops Dresses
              </a>
              <a rel="noopener noreferrer" href="#">
                Pants
              </a>
              <a rel="noopener noreferrer" href="#">
                Denim
              </a>
              <a rel="noopener noreferrer" href="#">
                Sweaters
              </a>
              <a rel="noopener noreferrer" href="#">
                T-Shirts
              </a>
              <a rel="noopener noreferrer" href="#">
                Jackets
              </a>
              <a rel="noopener noreferrer" href="#">
                Activewear
              </a>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="font-medium">Customization</h2>
            <div className="flex flex-col space-y-2 text-sm dark:text-white">
              <a rel="noopener noreferrer" href="#">
                Accessories
              </a>
              <a rel="noopener noreferrer" href="#">
                Watches
              </a>
              <a rel="noopener noreferrer" href="#">
                Wallets
              </a>
              <a rel="noopener noreferrer" href="#">
                Bags
              </a>
              <a rel="noopener noreferrer" href="#">
                Sunglasses
              </a>
              <a rel="noopener noreferrer" href="#">
                Hats Belts{" "}
              </a>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="font-medium">Brands</h2>
            <div className="flex flex-col space-y-2 text-sm dark:text-white">
              <a rel="noopener noreferrer" href="#">
                Full Nelson
              </a>
              <a rel="noopener noreferrer" href="#">
                My Way
              </a>
              <a rel="noopener noreferrer" href="#">
                Re-Arranged
              </a>
              <a rel="noopener noreferrer" href="#">
                Counterfeit
              </a>
              <a rel="noopener noreferrer" href="#">
                Significant
              </a>
              <a rel="noopener noreferrer" href="#">
                Other{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center px-6 pt-12 text-sm">
          <span className="dark:text-gray-600">
            © Copyright 1986. All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
