import React from 'react';

const Footer = () => {
  return (
    <>
      {/* Start Footer */}
      <footer className="footer-box">
        <div className="container">
          <div className="row">
            <div className="col-md-12 margin-bottom_30">
              <img src="img/f_logo.png" alt="#" />
            </div>
            <div className="col-xl-6 white_fonts">
              <div className="row">
                <div className="col-md-12 white_fonts margin-bottom_30">
                  <h3>Contact Us</h3>
                </div>
                <div className="col-md-4">
                  <div className="full icon">
                    <img src="images/social1.png" />
                  </div>
                  <div className="full white_fonts">
                    <p>London 145
                  <br />United Kingdom</p>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="full icon">
                    <img src="images/social2.png" />
                  </div>
                  <div className="full white_fonts">
                    <p>consultation@gmail.com
                  <br />consultation@gmail.com</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="full icon">
                    <img src="images/social3.png" />
                  </div>
                  <div className="full white_fonts">
                    <p>+7586656566
                  <br />+7586656566</p>
                  </div>
                </div>
                <div className="col-md-12">
                  <ul className="full social_icon margin-top_20">
                    <li><a href="#"><i className="fa fa-facebook-f" /></a></li>
                    <li><a href="#"><i className="fa fa-twitter" /></a></li>
                    <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                    <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-6 white_fonts">
              <div className="row">
                <div className="col-md-6">
                  <div className="footer_blog footer_menu">
                    <h3>Menus</h3>
                    <ul>
                      <li><a href="index.html">Home</a></li>
                      <li><a href="about.html">About Us</a></li>
                      <li><a href="services.html">Services</a></li>
                      <li><a href="#">Blog</a></li>
                      <li><a href="contact.html">Contact us</a></li>
                    </ul>
                  </div>
                  <div className="footer_blog recent_post_footer">
                    <h3>Recent Post</h3>
                    <p>Participate in staff meetings manage dedicated to marketing November 25, 2019</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="footer_blog full">
                    <h3>Newsletter</h3>
                    <div className="newsletter_form">
                      <form action="index.html">
                        <input type="email" placeholder="Your Email" name="#" required />
                        <button>Submit</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* End Footer */}
      <div className="footer_bottom">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p className="crp">© 2019 Business . All Rights Reserved.</p>
              <ul className="bottom_menu">
                <li><a href="#">Term of Service</a></li>
                <li><a href="#">Privacy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <a href="#" id="scroll-to-top" className="hvr-radial-out"><i className="fa fa-angle-up" /></a>
    </>
  )
}

export default Footer;