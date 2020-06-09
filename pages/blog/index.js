import React from 'react';
import { attributes, react as BlogContent } from '../../content/blog.md';

export const index = () => {
  return (
    <div>
      Strona główna bloga
      <BlogContent />
    </div>
  )
}

export default index