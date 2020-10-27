import React, { Component } from 'react';
import Head from "next/head";
import Header from './Header';
import Footer from './Footer';
import Breadcrumbs from './Breadcrumbs';

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
        {/* <Breadcrumbs /> */}
        {children}
        <Footer />
      </div>
      </>
    );
  }
}

export default Layout;