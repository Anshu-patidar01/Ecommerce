import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const items = [
  {
    image:
      "https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/1/0/10_5.jpg",

    path: "/women/clothing/lengha_choli",
  },

  {
    image:
      "https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/1/2/12_4.jpg",

    path: "/women/clothing/women_dress",
  },

  {
    image:
      "https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/9/_/9_8.jpg",

    path: "/women/clothing/women_dress",
  },

  {
    image:
      "https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/1/1/11_4.jpg",

    path: "/women/clothing/women_saree",
  },
].map((item) => <img key={item.path} src={item.image} alt="image" />);

const CarouselMain = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center bg-gray-100 ">
        <AliceCarousel
          disableButtonsControls
          // autoPlay
          autoPlayInterval={1000}
          infinite
          items={items}
        />
      </div>
    </div>
  );
};

export default CarouselMain;
