import React from 'react';
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import parseMD from 'parse-md';


import PostsWrapper from '../../../components/PostsWrapper';
import Posts from '../../../components/Posts';
import { DEFAULT_POSTS_PER_PAGE } from '../../../constants';
import getTotalPages from '../../../helpers/getTotalPages';
import setTotalPagesArray from '../../../helpers/setTotalPagesArray';

const BlogPages= ({ posts = [], totalPages = 0}) => {

  return (
    <PostsWrapper { ...{posts}}>
      <Posts { ...{posts, totalPages}} />
    </PostsWrapper>
  )
}

export const getStaticPaths = async () => {
    const files = fs.readdirSync("content/blog");
    
    // calculate pagination pages
    const paginationPages = getTotalPages(files) ;
    const slicedFiles = files.slice(0, paginationPages);

     // set static paths for blog pages
    const paths = slicedFiles.map((_, i) => ({
      params: {
        id: `${i +1}`
      }
    }));
    return {
      paths,
      fallback: false
    };
  };
  
  export const getStaticProps = async ({params: {id}}) => {
    const files = fs.readdirSync("content/blog");
    const paginationPages = setTotalPagesArray(getTotalPages(files));

    return {
      props: {
        posts: files && files.map(filename => {
      const markdownWithMetadata = fs
        .readFileSync(path.join("content/blog", filename), 'utf8')
      const { 
        metadata: {
          date = '', 
          title = '', 
          tags = '', 
          featuredImage = '',
          content ='',
        },
        } = parseMD(markdownWithMetadata);
  
      const parsedMarkdown = matter(content);
      const htmlString = marked(parsedMarkdown.content);
  
      return {
        slug: filename.replace(".md", ""),
        date: date.toString(),
        title,
        featuredImage,
        tags,
        htmlString,
      }
  
    })
    .sort((a, b) => {
      var dateA = new Date(a.date);
      var dateB = new Date(b.date);
      return dateA - dateB;
    })
    .reverse()
    .slice((DEFAULT_POSTS_PER_PAGE * id) - DEFAULT_POSTS_PER_PAGE, DEFAULT_POSTS_PER_PAGE * id),
    totalPages: paginationPages,
      }
    };
  };

export default BlogPages;