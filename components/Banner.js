import React, { Component } from 'react';
import { attributes } from '../content/componentSlider.md';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';


const AutoplaySlider = withAutoplay(AwesomeSlider);

const Banner = () => {

  const { homeMainSlider = [] } = attributes || {};

  return (
    <AutoplaySlider
      play={true}
      cancelOnInteraction={true}
      interval={8000}
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

        <div key={i}>

          <div className="custom-banner-content">
            <div className="custom-banner-content-left">
              <p className="custom-banner-content-left-inner">
                DR JANUSZ SYKUT BLOG
                    </p>
            </div>
            <div className="custom-banner-middle">
              <p className="custom-slider-title">{title}</p>
              <p className="custom-slider-sub-text">{subtitle}</p>
              <p className="custom-slider-content">{content}</p>
            </div>
            <div className="custom-banner-content-right">
              <ul>
                <li>
                  <a href="https://www.instagram.com/challenge/?next=/drnmed_jsykut/%253Fhl%253Dpl">
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://pl.linkedin.com/">
                    <i class="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>

            </div>
          </div>

          <img src={imgUrl} alt="" />
        </div>

      )}
    </AutoplaySlider>

  );

}

export default Banner;