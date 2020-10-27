import React, { useCallback } from 'react';
import Link from 'next/link';
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'



const Header = () => {

  const scrollToAbout = () => {
    scroller.scrollTo('aboutMe', {
      duration: 1000,
      delay: 50,
      smooth: true,
      offset: -150, 
    });
  }

  return (
    <header id="header_1">
      <div className="header-menu-area header-menu-layout2 box-layout-child">
        <div className="full-width-container">
          <div className="row no-gutters d-flex align-items-center">
            <div className="col-lg-2 col-md-2 d-flex justify-content-start">
              <div className="logo-area">
                <Link  href="/">

                  <a className="active-menu temp-logo">
                    <img src="/images/jsykutlogo.svg" alt="logo" className="img-fluid" /></a>

                </Link>
              </div>
            </div>
            <div className="col-lg-8 col-md-8 d-flex justify-content-center possition-static">
              <div className="template-main-menu">
                <nav id="dropdown">
                  <ul>
                    <li>
                      <Link href="/"><a className="active-menu">Home</a></Link>
                    </li>
                    <li onClick={scrollToAbout}>
                      <Link  href="/#"><a className="active-menu">O mnie</a></Link>
                    </li>
                    <li>
                      <Link href="/blog/strona/1"><a className="active-menu">Blog</a></Link>
                    </li>
                    <li>
                      <a href="http://prodentica.info/">Prodentica</a>
                    </li>
                    <li>
                      <a href="https://prestigelublin.eu/">Prestige</a>
                    </li>
                    <li>
                      <Link href="/kontakt"><a className="active-menu">Kontakt</a></Link>
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