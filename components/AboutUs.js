import React from 'react';
import { attributes, react as AboutUsContent } from '../content/componentAboutUs.md';

const AboutUs = () => {

  const {
    title = '',
    subtitle = '',
    slogan = '',
    titleDark = '',
    imgUrl = ''
  } = attributes;

  return (
    <>
     About us
    </>
  )
}

export default AboutUs;
