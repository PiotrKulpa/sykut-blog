import React from 'react';
import fs from "fs";

import PostsWrapper from '../components/PostsWrapper';
import SearchResults from '../components/SearchResults';
import { BLOG_FILES_PATH } from '../constants';
import getParsedPosts from '../helpers/getParsedPosts';

const Search = ({ posts = [] }) => {
  return (
    <PostsWrapper {...{ posts }} >
      <SearchResults {...{ posts }} pageName='search'/>
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