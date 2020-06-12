import { Component } from 'react';
import { attributes, react as HomeContent } from '../content/home.md';
import Banner from '../components/Banner';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import WhatWeDone from '../components/WhatWeDone';

export default class Home extends Component {
  render() {
    let { homeMainBanner = [] } = attributes;
    
    return (
      <>
      <Banner data={homeMainBanner} />
      <AboutUs />
      <Services />
      <Portfolio />
      <WhatWeDone />  
          
          {/* section */}
          <div className="section layout_padding">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="full">
                    <div className="heading_main text_align_left">
                      <div className="left">
                        <p className="section_count">05</p>
                      </div>
                      <div className="right">
                        <p className="small_tag">Our Team</p>
                        <h2><span className="theme_color">We Have a Professional</span> Team of Business Analysts.</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row margin-top_30">
                <div className="col-lg-12 margin-top_30">
                  <div id="team_slider" className="carousel slide" data-ride="carousel">
                    {/* The slideshow */}
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div className="row">
                          <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="full">
                              <div className="full team_member_img text_align_center">
                                <img src="img/img-7.png" alt="#" />
                                <div className="social_icon_team">
                                  <ul className="social_icon">
                                    <li><a href="#"><i className="fa fa-facebook-f" /></a></li>
                                    <li><a href="#"><i className="fa fa-twitter" /></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                                    <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                                  </ul>
                                </div>
                              </div>
                              <div className="full text_align_center">
                                <h3>Jone due</h3>
                              </div>
                              <div className="full text_align_center">
                                <p>this a long established fact that a reader will be distracted by the readable content </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="full">
                              <div className="full team_member_img text_align_center">
                                <img src="img/img-8.png" alt="#" />
                                <div className="social_icon_team">
                                  <ul className="social_icon">
                                    <li><a href="#"><i className="fa fa-facebook-f" /></a></li>
                                    <li><a href="#"><i className="fa fa-twitter" /></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                                    <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                                  </ul>
                                </div>
                              </div>
                              <div className="full text_align_center">
                                <h3>Jone due</h3>
                              </div>
                              <div className="full text_align_center">
                                <p>this a long established fact that a reader will be distracted by the readable content </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="full">
                              <div className="full team_member_img text_align_center">
                                <img src="img/img-9.png" alt="#" />
                                <div className="social_icon_team">
                                  <ul className="social_icon">
                                    <li><a href="#"><i className="fa fa-facebook-f" /></a></li>
                                    <li><a href="#"><i className="fa fa-twitter" /></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                                    <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                                  </ul>
                                </div>
                              </div>
                              <div className="full text_align_center">
                                <h3>Jone due</h3>
                              </div>
                              <div className="full text_align_center">
                                <p>this a long established fact that a reader will be distracted by the readable content </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="row">
                          <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="full">
                              <div className="full team_member_img text_align_center">
                                <img src="img/img-7.png" alt="#" />
                                <div className="social_icon_team">
                                  <ul className="social_icon">
                                    <li><a href="#"><i className="fa fa-facebook-f" /></a></li>
                                    <li><a href="#"><i className="fa fa-twitter" /></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                                    <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                                  </ul>
                                </div>
                              </div>
                              <div className="full text_align_center">
                                <h3>Jone due</h3>
                              </div>
                              <div className="full text_align_center">
                                <p>this a long established fact that a reader will be distracted by the readable content </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="full">
                              <div className="full team_member_img text_align_center">
                                <img src="img/img-8.png" alt="#" />
                                <div className="social_icon_team">
                                  <ul className="social_icon">
                                    <li><a href="#"><i className="fa fa-facebook-f" /></a></li>
                                    <li><a href="#"><i className="fa fa-twitter" /></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                                    <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                                  </ul>
                                </div>
                              </div>
                              <div className="full text_align_center">
                                <h3>Jone due</h3>
                              </div>
                              <div className="full text_align_center">
                                <p>this a long established fact that a reader will be distracted by the readable content </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="full">
                              <div className="full team_member_img text_align_center">
                                <img src="img/img-9.png" alt="#" />
                                <div className="social_icon_team">
                                  <ul className="social_icon">
                                    <li><a href="#"><i className="fa fa-facebook-f" /></a></li>
                                    <li><a href="#"><i className="fa fa-twitter" /></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                                    <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                                  </ul>
                                </div>
                              </div>
                              <div className="full text_align_center">
                                <h3>Jone due</h3>
                              </div>
                              <div className="full text_align_center">
                                <p>this a long established fact that a reader will be distracted by the readable content </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bullets">
                        {/* Indicators */}
                        <ul className="carousel-indicators">
                          <li data-target="#team_slider" data-slide-to={0} className="active" />
                          <li data-target="#team_slider" data-slide-to={1} />
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end section */}

        
      </>
    )
  }
}