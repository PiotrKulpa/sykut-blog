import React, { Component } from 'react';
import { attributes } from '../content/componentSlider.md';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';


const AutoplaySlider = withAutoplay(AwesomeSlider);

const Banner = () => {

  const { homeMainSlider = [] } = attributes || {};

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
      <div className="full-width-container" style={{ width: "100%" }}>
        <div className="slider-area slider-layout1 slider-top-margin95">
          <div className="bend niceties preview-1">
            <div className="ensign-nivoslider-1"></div>
            <AutoplaySlider
              play={true}
              cancelOnInteraction={false}
              interval={6000}
              organicArrows={false}
              buttons={false}
              bullets={false}
              className="custom-react-awesome-slider"
            >
              {homeMainSlider && homeMainSlider.map(({
                imgUrl = '',
                content = '',
                subtitle = '',
                title = ''
              }, i) =>

                <div>
                  <div className="custom-banner-content">
                    <p className="custom-slider-title">{title}</p>
                    <p className="custom-slider-sub-text">{subtitle}</p>
                    <p className="custom-slider-content">{content}</p>
                  </div>

                  <img src={imgUrl} alt="" />
                </div>

              )}
            </AutoplaySlider>
          </div>
        </div>
      </div>

    </section >
  );

}

export default Banner;