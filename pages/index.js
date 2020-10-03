import { Component } from 'react';
import Banner from '../components/Banner';
import AboutUs from '../components/AboutUs';
import LatestBlog from '../components/LatestBlog';
import Brands from '../components/Brands';
import PopularBlog from '../components/PopularBlog';

export default class Home extends Component {
  render() {
    
    return (
      <>
      <Banner />
      <AboutUs />
      <LatestBlog />
      <Brands />
      <PopularBlog />
      </>
    )
  }
}