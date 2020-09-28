import { Component } from 'react';
import { attributes, react as HomeContent } from '../content/home.md';
import Banner from '../components/Banner';
import AboutUs from '../components/AboutUs';
import Portfolio from '../components/Portfolio';
import WhatWeDone from '../components/WhatWeDone';
import OurTeam from '../components/OurTeam';
import LatestBlog from '../components/LatestBlog';

export default class Home extends Component {
  render() {
    let { homeMainBanner = [] } = attributes;
    
    return (
      <>
      <Banner data={homeMainBanner} />
      <AboutUs />
      <LatestBlog />
      <Portfolio />
      <WhatWeDone />  
      <OurTeam />
      </>
    )
  }
}