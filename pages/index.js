import { Component } from 'react';
import { attributes, react as HomeContent } from '../content/home.md';
import Banner from '../components/Banner';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import WhatWeDone from '../components/WhatWeDone';
import OurTeam from '../components/OurTeam';

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
      <OurTeam />
      </>
    )
  }
}