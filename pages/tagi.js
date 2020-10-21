import React from 'react';
import fs from "fs";

import PostsWrapper from '../components/PostsWrapper';
import SearchTags from '../components/SearchTags';
import { BLOG_FILES_PATH } from '../constants';
import getParsedPosts from '../helpers/getParsedPosts';

const Tags = ({ posts = [] }) => {
  return (
    <PostsWrapper {...{ posts }}>
      <SearchTags {...{ posts }} />
    </PostsWrapper>
  )
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(BLOG_FILES_PATH);
  return {
    props: {
      posts: getParsedPosts(files),

    },
  }
}

export default Tags;