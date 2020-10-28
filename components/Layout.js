import React, { Component } from 'react';
import Head from "next/head";
import Header from './Header';
import Footer from './Footer';
import CookieConsent from "react-cookie-consent";

class Layout extends Component {
  render() {
    const { children } = this.props
    return (
      <>
        <Head>
          <title>Dr N. Med Janusz Sykut</title>
        </Head>
        <div id="wrapper" className="wrapper">
          <Header />
          {children}
          <Footer />
          <CookieConsent
            location="bottom"
            buttonText="Zgoda."
            cookieName="myAwesomeCookieName2"
            style={{ background: "#F8F8F8", color: "black" }}
            buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
            expires={150}
          >
            Ta strona korzysta z ciasteczek, aby świadczyć usługi na najwyższym poziomie. 
            Dalsze korzystanie ze strony oznacza, że zgadzasz się na ich użycie.
          </CookieConsent>
        </div>
      </>
    );
  }
}

export default Layout;