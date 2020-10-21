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

export const getServerSideProps = async (context) => {
  const files = fs.readdirSync(BLOG_FILES_PATH);
  const { query: { id = '' }} = context;
  const filteredPosts = getParsedPosts(files)
    .filter((el) => el.tags.toLowerCase().includes(id.toLowerCase()));
  return {
    props: {
      posts: filteredPosts,

    },
  }
}

export default Tags;