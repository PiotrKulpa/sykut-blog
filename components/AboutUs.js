import React from 'react';
import { attributes, react as AboutUsContent } from '../content/componentAboutUs.md';

const AboutUs = () => {

  const {
    title = '',
    subtitle = '',
    slogan = '',
    titleDark = '',
    imgUrl = ''
  } = attributes;

  return (
    <>
      {/* section */}
      <div className="section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="full">
                <div className="heading_main text_align_left">
                  <div className="left">
                    <p className="section_count">01</p>
                  </div>
                  <div className="right">
                    <p className="small_tag">{title}</p>
                    <h2><span className="theme_color">{subtitle}</span></h2>
                    <p className="large">{slogan}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end section */}

      {/* section */}
      <div className="section dark_bg">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-12 text_align_center padding_0">
              <div className="full">
                <img className="img-responsive" src={imgUrl} alt="#" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 white_fonts layout_padding padding_left_right">
              <h3 className="small_heading">{titleDark}</h3>
              <p><AboutUsContent /></p>
            </div>
          </div>
        </div>
      </div>
      {/* end section */}
    </>
  )
}

export default AboutUs;
