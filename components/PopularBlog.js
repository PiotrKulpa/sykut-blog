import React from 'react';
import fm from '../content/componentPopularBlog.md';

const PopularBlog = () => {

  const {
    content = '' 
  } = fm.attributes  || {};

    return (
        <div dangerouslySetInnerHTML = {{ __html: content }} />
    )
}

export default PopularBlog;
