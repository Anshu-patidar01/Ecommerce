import React from "react";
import CarouselMain from "../../components/Carousels/MainCarousel/CarouselMain";
import BasicCarousels from "../../components/Carousels/BasicCarousels/BasicCarousels";
import BrandCarousel from "../../components/Carousels/BrandCarousel/BrandCarousel";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../footer/Footer";
const HomePage = () => {
  return (
    <>
      <div>
        <Navigation />
      </div>
      <div>
        <CarouselMain />
      </div>
      <div>
        <BasicCarousels title={"Man's kurta"} />
      </div>
      <div>
        <BrandCarousel title={"SEASONAL FAVS✨"} />
      </div>
      <div>
        <BasicCarousels title={"Womans's kurta"} />
      </div>
      <div>
        <BrandCarousel title={"TRANDING NOW🫅"} />
      </div>
      <div>
        <BasicCarousels title={"Man's Jeans"} />
      </div>
      <div>
        {" "}
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
