import React from "react";
import SlickSlider from "react-slick";
import fm from "../content/componentBrands.md";

const settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
};

const Brands = () => {
  const { Brands: brandsContent } = fm.attributes || {};
  return (
    <section className="brand-wrap-layout2">
      <div className="container">
        <SlickSlider {...settings}>
          {brandsContent &&
            brandsContent.map((el, i) => (
              <React.Fragment key={i}>
                <img src={el.imgUrl} />
              </React.Fragment>
            ))}
        </SlickSlider>
      </div>
    </section>
  );
};

export default Brands;
