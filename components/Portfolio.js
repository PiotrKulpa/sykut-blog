import React from 'react';
import { attributes } from '../content/componentPortfolio.md';

const Portfolio = () => {

  const {
    title = '',
    subtitle = '',
    serviceList = [],
  } = attributes;
  
  return (
    <div className="section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="full">
              <div className="heading_main text_align_left">
                <div className="left">
                  <p className="section_count">03</p>
                </div>
                <div className="right">
                  <p className="small_tag">Portfolio</p>
                  <h2><span className="theme_color">CHOOSE A</span> PROFESSIONAL DESIGN</h2>
                  <p className="large">Websites</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row margin-top_30">
          <div className="col-lg-12 margin-top_30">
            <div id="demo" className="carousel slide" data-ride="carousel">
              {/* The slideshow */}
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                      <img className="img-responsive" src="images/img1.png" alt="#" />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                      <img className="img-responsive" src="images/img2.png" alt="#" />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                      <img className="img-responsive" src="images/img3.png" alt="#" />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                      <img className="img-responsive" src="images/img4.png" alt="#" />
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                      <img className="img-responsive" src="images/img1.png" alt="#" />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                      <img className="img-responsive" src="images/img2.png" alt="#" />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                      <img className="img-responsive" src="images/img3.png" alt="#" />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                      <img className="img-responsive" src="images/img4.png" alt="#" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Left and right controls */}
              <a className="carousel-control-prev" href="#demo" data-slide="prev">
                <span className="carousel-control-prev-icon" />
              </a>
              <a className="carousel-control-next" href="#demo" data-slide="next">
                <span className="carousel-control-next-icon" />
              </a>
            </div>
          </div>
          <div className="col-lg-12">
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when
            looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content here', making it look like readable English. Many
            desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a
     search for 'lorem ipsum' will uncover many web sites still in their</p>
          </div>
          <div className="col-lg-12">
            <div className="full center">
              <a href="about.html" className="hvr-radial-out button-theme">See More &gt;</a>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Portfolio;
