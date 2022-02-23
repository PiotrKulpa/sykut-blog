import React from "react";
import Link from "next/link";

export const Custom404 = () => {
  return (
    <section className="error-page">
      <div className="error-page-content-wrap">
        <div className="error-content">
          <div className="main-logo">
            <a href="index.html">
              <img src="/images/jsykutlogo.jpg" alt="logo" />
            </a>
          </div>
          <div className="error-logo">
            <img src="/images/404-logo.png" alt="404" />
          </div>
          <h2>Ups! Nie ma takiej strony</h2>
          <p>
            Strona której szukasz została przeniesiona lub jej nie ma. Użyj
            przycisku Home i przejdz do strony domowej.
          </p>
          <Link href="/">
            <a className="item-btn">
              Przejdź do Home <i className="flaticon-right-arrow"></i>
            </a>
          </Link>
          <div className="copyright">© 2018 J.Sykut. All Rights Reserved.</div>
        </div>
      </div>
      <div id="Clouds">
        <div className="Cloud Foreground"></div>
        <div className="Cloud Background"></div>
      </div>
    </section>
  );
};

export default Custom404;
