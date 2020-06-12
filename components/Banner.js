import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import { attributes } from '../content/componentSlider.md';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Banner = () => {

  const { homeMainSlider = [] } = attributes;
  
  return (

    <div className="ulockd-home-slider">
      <div className="container-fluid">
        <div className="row">
          <AutoplaySlider 
            play={true} 
            className="pogoSlider" 
            id="js-main-slider"
            interval={6000}
          >
            {homeMainSlider && homeMainSlider.map(({
              btnTxt = '',
              btnUrl = '',
              imgUrl = '',
              message = '',
              subtitle = '',
              title = ''
            }, i) =>
              <div key={i} className="pogoSlider-slide" style={{ backgroundImage: `url(${imgUrl})` }}>
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="slide_text">
                        <h3>{title}</h3>
                        <br />
                        <h4><span className="theme_color">{subtitle}</span></h4>
                        <br />
                        <p>{message}</p>
                        <a className="contact_bt" href={btnUrl}>{btnTxt}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </AutoplaySlider>
        </div>
      </div>
    </div >
  )
}

export default Banner;