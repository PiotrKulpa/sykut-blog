import React, { memo } from 'react';
import { attributes, html, react as AboutUsContent } from '../content/componentAboutUs.md';
import fm from '../content/componentAboutUs.md';
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


const AboutUs = () => {

  const {
    title = '',
    content = '',
    imgUrl = ''
  } = fm.attributes  || {};


  return (
    <Element name="aboutMe">
    <section id="omnie" className="about-wrap-layout1">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 d-flex align-items-center order-lg-2">
            <div className="about-box-layout2">
              <div contentEditable='true' dangerouslySetInnerHTML={{ __html: content }}></div>
              <div className="about-right-side-content">{title}</div>
            </div>
          </div>
          <div className="col-lg-5 order-lg-1">
            <div className="about-box-layout1">
              <img src={imgUrl} alt="About Us" />
            </div>
          </div>
        </div>
      </div>
    </section>
    </Element>
  )
}

export default memo(AboutUs);
