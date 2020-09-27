import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header id="header_1">
      <div className="header-menu-area header-menu-layout2 box-layout-child">
        <div className="full-width-container">
          <div className="row no-gutters d-flex align-items-center">
            <div className="col-lg-2 col-md-2 d-flex justify-content-start">
              <div className="logo-area">
                <Link exact activeClassName="active-menu temp-logo" href="/">

                  <img src="/images/januszsykut-personal.png" alt="logo" className="img-fluid" />

                </Link>
              </div>
            </div>
            <div className="col-lg-8 col-md-8 d-flex justify-content-center possition-static">
              <div className="template-main-menu">
                <nav id="dropdown">
                  <ul>
                    <li>
                      <Link exact activeClassName="active-menu" href="/"><a>Home</a></Link>
                    </li>
                    <li>
                      <Link exact activeClassName="active-menu" href="#about"><a>O mnie</a></Link>
                    </li>
                    <li>
                      <Link exact activeClassName="active-menu" href="/blog"><a>Blog</a></Link>
                    </li>
                    <li>
                      <a href="http://prodentica.info/">Prodentica</a>
                    </li>
                    <li>
                      <a href="https://prestigelublin.eu/">Prestige</a>
                    </li>
                    <li>
                      <Link exact activeClassName="active-menu" href="/kontakt"><a>Kontakt</a></Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-lg-2 col-md-2 d-flex justify-content-end">
              <div className="navigation-menu">
                <ul>
                  <li className="header-search-box btn-color-dark">
                    <a href="#header-search" title="Search">
                      <i className="flaticon-search"></i>
                    </a>
                  </li>
                  <li className="offcanvas-menu-wrap">
                    <button type="button" className="offcanvas offcanvas-menu-btn offcanvas-btn-dark menu-status-open">
                      <span className="menu-btn-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                      </span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;