import React, { useMemo, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Footer = () => {
  const inputHeaderEl = useRef(null);
  const router = useRouter();
  const search = () => {
    const searchText = inputHeaderEl.current.value;
    searchText &&
      router.push(`/szukaj?id=${searchText}`, undefined, { shallow: true });
  };

  const currentYear = useMemo(() => {
    const date = new Date();
    return date.getFullYear();
  }, []);

  return (
    <>
      {/* <!-- Footer Area Start Here --> */}
      <footer className="footer-wrap-layout2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="footer-box-layout2">
                <div className="footer-logo">
                  <Link href="/">
                    <a>
                      <img src="/images/jsykutlogo-footer.svg" alt="Logo" />
                    </a>
                  </Link>
                </div>
                <ul className="footer-menu">
                  <li>
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog">
                      <a>Blog</a>
                    </Link>
                  </li>
                  <li>
                    <a href="http://prodentica.info/">Prodentica</a>
                  </li>
                  <li>
                    <a href="https://prestigelublin.eu/">Prestige</a>
                  </li>
                  <li>
                    <Link href="/kontakt">
                      <a>Kontakt</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/polityka-prywatnosci">
                      <a>Polityka prywatności</a>
                    </Link>
                  </li>
                </ul>
                <ul className="footer-social">
                  <li>
                    <a href="https://www.instagram.com/challenge/?next=/drnmed_jsykut/%253Fhl%253Dpl">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://pl.linkedin.com/">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
                <div className="copyright">
                  Copyright © {currentYear} by Dr J. Sykut. All rights reserved.
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- Footer Area End Here --> */}
      {/* <!-- Search Box Start Here --> */}
      <div id="header-search" className="header-search">
        <button type="button" className="close">
          ×
        </button>
        <form className="header-search-form">
          <input
            ref={inputHeaderEl}
            type="search"
            placeholder="Szukaj........"
          />
          <button onClick={search} type="submit" className="search-btn">
            <i className="flaticon-search"></i>
          </button>
        </form>
      </div>
      {/* <!-- Search Box End Here --> */}
      {/* <!-- Off canvas Menu Start --> */}
      <ul className="offcanvas-navigation">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">O mnie</a>
        </li>
        <li>
          <a href="/blog/strona/1">Blog</a>
        </li>
        <li>
          <a href="http://prodentica.info/">Prodentica</a>
        </li>
        <li>
          <a href="https://prestigelublin.eu/">Prestige</a>
        </li>
        <li>
          <a href="/kontakt">Kontakt</a>
        </li>
      </ul>
      <svg
        className="shape-overlays"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          className="shape-overlays__path"
          d="M 0 100 C 50 100 50 100 100 100 V 100 H 0"
        ></path>
        <path
          className="shape-overlays__path"
          d="M 0 100 C 50 100 50 100 100 100 V 100 H 0"
        ></path>
        <path
          className="shape-overlays__path"
          d="M 0 100 C 50 100 50 100 100 100 V 100 H 0"
        ></path>
      </svg>
      {/*  Off canvas Menu End  */}
    </>
  );
};

export default Footer;
