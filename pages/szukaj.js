import React from 'react';
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import parseMD from 'parse-md';


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
    el.htmlString.toLowerCase().includes(id.toLowerCase()))
  console.log(id);
  return {
    props: {
      posts: filteredPosts,

    }, // will be passed to the page component as props
  }
}

export default Search;