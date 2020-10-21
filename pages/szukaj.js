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

export const getServerSideProps = async (context) => {
  const files = fs.readdirSync(BLOG_FILES_PATH);
  const { query: { id = '' }} = context;
  const filteredPosts = getParsedPosts(files)
    .filter((el) => el.title.toLowerCase().includes(id.toLowerCase()) || 
    el.htmlString.toLowerCase().includes(id.toLowerCase()));
  return {
    props: {
      posts: filteredPosts,

    },
  }
}

export default Search;