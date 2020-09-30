import { Component } from 'react';
import Banner from '../components/Banner';
import AboutUs from '../components/AboutUs';
import LatestBlog from '../components/LatestBlog';

export default class Home extends Component {
  render() {
    
    return (
      <>
      <Banner />
      <AboutUs />
      <LatestBlog />
      </>
    )
  }
}