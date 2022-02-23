import React from "react";
import fs from "fs";

import PostsWrapper from "../../../components/PostsWrapper";
import Posts from "../../../components/Posts";
import { DEFAULT_POSTS_PER_PAGE } from "../../../constants";
import getTotalPages from "../../../helpers/getTotalPages";
import setTotalPagesArray from "../../../helpers/setTotalPagesArray";
import getParsedPosts from "../../../helpers/getParsedPosts";
import { BLOG_FILES_PATH } from "../../../constants";
import Breadcrumbs from "../../../components/Breadcrumbs";

const BlogPages = ({
  posts = [],
  totalPages = 0,
  lastPosts = [],
  tags = [],
}) => {
  return (
    <>
      <Breadcrumbs />
      <PostsWrapper {...{ lastPosts, tags }}>
        <Posts {...{ posts, totalPages }} />
      </PostsWrapper>
    </>
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync(BLOG_FILES_PATH);
  const paginationPages = getTotalPages(files);
  const slicedFiles = files.slice(0, paginationPages);
  const paths = slicedFiles.map((_, i) => ({
    params: {
      id: `${i + 1}`,
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { id } }) => {
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
      posts: getParsedPosts(files).slice(
        DEFAULT_POSTS_PER_PAGE * id - DEFAULT_POSTS_PER_PAGE,
        DEFAULT_POSTS_PER_PAGE * id
      ),
      totalPages: paginationPages,
      tags,
      lastPosts: getParsedPosts(files).slice(0, 6),
    },
  };
};

export default BlogPages;
