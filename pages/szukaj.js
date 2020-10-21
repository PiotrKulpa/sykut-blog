import React from 'react';
import fs from "fs";

import PostsWrapper from '../components/PostsWrapper';
import SearchPosts from '../components/SearchPosts';
import { BLOG_FILES_PATH } from '../constants';
import getParsedPosts from '../helpers/getParsedPosts';

const Search = ({ posts = [] }) => {
  return (
    <PostsWrapper {...{ posts }}>
      <SearchPosts {...{ posts }} />
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

export default Search;