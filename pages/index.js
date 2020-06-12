import { Component } from 'react';
import { attributes, react as HomeContent } from '../content/home.md';
import Banner from '../components/Banner';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';

export default class Home extends Component {
  render() {
    let { homeMainBanner = [] } = attributes;
    
    return (
      <>
      <Banner data={homeMainBanner} />
      <AboutUs />
      <Services />
      <Portfolio />
         
         
          {/* section */}
          <div className="section layout_padding dark_bg">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="full">
                    <div className="heading_main text_align_left white_fonts">
                      <div className="left">
                        <p className="section_count">04</p>
                      </div>
                      <div className="right">
                        <h2>Create <span className="theme_color">PERSONALISED Business</span></h2>
                        <p className="large">What we done</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row margin-top_30">
                <div className="col-lg-12 margin-top_30 white_fonts">
                  <p>ss normal distribution of letters, as opposed to using 'Content here, content here', making it look like
                  readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default
                  model text, and a search for 'lorem ipsum' will uncover many web sites still in theirss normal distribution
            of letters, as opposed to using 'Content here, content here', making it look like re ed r</p>
                </div>
                <div className="col-lg-12">
                  <div className="full">
                    <a href="about.html" className="contact_bt">Read More &gt;</a>
                  </div>
                </div>
              </div>
              <div className="row margin-top_30 counter_section">
                <div className="col-sm-12 col-md-4">
                  <div className="counter margin-top_30">
                    <h2 className="timer count-title count-number" data-to={23} data-speed={1500} />
                    <p className="count-text">NOMINATIONS</p>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4">
                  <div className="counter margin-top_30">
                    <h2 className="timer count-title count-number" data-to={7} data-speed={1500} />
                    <p className="count-text">AWARDS</p>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4">
                  <div className="counter margin-top_30">
                    <h2 className="timer count-title count-number" data-to={31} data-speed={1500} />
                    <p className="count-text">AGENCIES</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end section */}
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