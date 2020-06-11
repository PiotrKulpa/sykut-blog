import React from 'react';

const Banner = (props) => {
  
  const { data = [] } = props;
  console.log(data);
  return (
    
    <div className="ulockd-home-slider">
      <div className="container-fluid">
        <div className="row">
          <div className="pogoSlider" id="js-main-slider">
          {data && data.map((el) => el.title)}
            <div className="pogoSlider-slide" style={{ backgroundImage: 'url(img/banner-img.png)' }}>
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="slide_text">
                      <h3>Trusted and<br />Professional Advisers</h3>
                      <br />
                      <h4><span className="theme_color">For your Business</span></h4>
                      <br />
                      <p>Showcase your Profile to the world using online CV builder and Get Hired Faster</p>
                      <a className="contact_bt" href="about.html">About us</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
  </div >
  )
}

export default Banner;