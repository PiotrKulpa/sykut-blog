import React from 'react';
import { attributes } from '../content/componentWhatWeDone.md';

const WhatWeDone = () => {

  const {
    content = '',
  } = attributes;

  return (<div dangerouslySetInnerHTML={{ __html: content }} />);
}

export default WhatWeDone;
