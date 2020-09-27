import React, { Component } from 'react';
import { attributes } from '../content/componentSlider.md';
import SlickSlider from "react-slick";

const { homeMainSlider = [] } = attributes;
console.log(homeMainSlider);
class Banner extends Component {


  render() {
    var settings = {
      dots: false,
      infinite: true,
      autoplay: false,
      autoplaySpeed: 5000,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (

      <section className="slider-wrap-layout1 box-layout-child-4">
        <div className="slider-left-side-content">JANUSZ SYKUT BLOG</div>
        <div className="slider-right-side-content">
          <ul>
            <li>
              <a href="/">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fab fa-behance"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fab fa-dribbble"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fab fa-google-plus-g"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="full-width-container" style={{width: "100%"}}>
          <div className="slider-area slider-layout1 slider-top-margin95">
            <SlickSlider {...settings}>
             

              {homeMainSlider && homeMainSlider.map(({
                btnTxt = '',
                btnUrl = '',
                imgUrl = '',
                message = '',
                subtitle = '',
                title = ''
              }, i) =>
              <div>
                <img src={imgUrl}alt=""/>
              </div>
              )}
          </SlickSlider>
          </div>
        </div>


      </section>


    );
  }
}

export default Banner;