import React from "react";
import fs from "fs";

import PostsWrapper from "../components/PostsWrapper";
import SearchResults from "../components/SearchResults";
import { BLOG_FILES_PATH } from "../constants";
import getParsedPosts from "../helpers/getParsedPosts";
import getTotalPages from "../helpers/getTotalPages";
import setTotalPagesArray from "../helpers/setTotalPagesArray";
import Breadcrumbs from "../components/Breadcrumbs";

const Search = ({ posts = [], lastPosts = [], tags = [] }) => {
  return (
    <>
      <Breadcrumbs ovverideLast="szukaj" />
      <PostsWrapper {...{ lastPosts, tags }}>
        <SearchResults {...{ posts }} pageName="search" />
      </PostsWrapper>
    </>
  );
};

export const getStaticProps = async () => {
  const files = fs.readdirSync(BLOG_FILES_PATH);
  const paginationPages = setTotalPagesArray(getTotalPages(files));
  const tags = Array.from(
    new Set(
      getParsedPosts(files)
        .map(({ tags }) => {
          return tags.replace(/\s/g, "");
        })
        .join(",")
        .split(",")
        .slice(0, 12)
    )
  );
  return {
    props: {
      posts: getParsedPosts(files),
      totalPages: paginationPages,
      tags,
      lastPosts: getParsedPosts(files).slice(0, 6),
    },
  };
};

export default Search;
