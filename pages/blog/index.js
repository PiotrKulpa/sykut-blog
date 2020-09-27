import React from 'react';
import { attributes, react as BlogContent } from '../../content/blog.md';
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import parseMD from 'parse-md';


const index = ({ posts }) => {
  const { title } = attributes;

   {/* loop */}
  //  {posts.map(post => {
  //   const { 
  //     slug = '', 
  //     date = '', 
  //     htmlString = '', 
  //     title = '', 
  //     description = '',
  //     featuredimage = ''
  //   } = post;
  //   // dangerouslySetInnerHTML={{ __html: post.htmlString }}
  //   return ()
  //   )}

  return (
    <>
     Blog

    </>
  )
}

export const getStaticProps = async () => {
  const files = fs.readdirSync("content/blog");


  return {
    props: {
      posts: files.map(filename => {
        const markdownWithMetadata = fs
          .readFileSync(path.join("content/blog", filename), 'utf8')
        const { metadata, content } = parseMD(markdownWithMetadata);
        const parsedMarkdown = matter(content);
        const htmlString = marked(parsedMarkdown.content);
        return {
          slug: filename.replace(".md", ""),
          date: metadata.date.toLocaleString(),
          title: metadata.title,
          description: metadata.description,
          featuredimage: metadata.featuredimage,
          htmlString
        }

      })
    }
  };
};

export default index;