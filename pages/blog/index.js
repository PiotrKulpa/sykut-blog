import React from 'react';
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import parseMD from 'parse-md';


import PostsWrapper from '../../components/PostsWrapper';
import Posts from '../../components/Posts';
import getSortedPosts from '../../helpers/getSortedPosts'


const index = ({ posts = [] }) => {

  return (
    <PostsWrapper>
    <Posts { ...{posts}} />
    </PostsWrapper>
  )
}

export const getStaticProps = async () => {
  const files = fs.readdirSync("content/blog");

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
    }
  };
};

export default index;