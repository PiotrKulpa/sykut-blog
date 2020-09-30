import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import marked from "marked";
import parseMD from 'parse-md';


const Post = ({ htmlString, date, title, featuredimage }) => {

  console.log(htmlString, date, title, featuredimage);
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <p>{date}</p>
      <p>{date}</p>
      <p>{date}</p>
      <p>{date}</p>
      <p>{date}</p>
      <p>{date}</p>
      <p>{date}</p>
      <p>{date}</p>
      <p>{date}</p>
      <div dangerouslySetInnerHTML={{ __html: htmlString }} />
    </>
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync("content/blog");
  
  const paths = files.map(filename => ({
    params: {
      slug: filename.replace(".md", "")
    }
  }));
  

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMetadata = fs
    .readFileSync(path.join("content/blog", slug + ".md"), 'utf8');
    const { 
      metadata: {
      date = '', 
      title = '', 
      tags = '', 
      featuredimage = ''
      },
      content = '',
   } = parseMD(markdownWithMetadata);  
    const parsedMarkdown = matter(content);
    const htmlString = marked(parsedMarkdown.content);
  // const parsedMarkdown = matter(markdownWithMetadata);

  // const htmlString = marked(parsedMarkdown.content);

  return {
    props: {
      htmlString,
      date: date.toLocaleString(),
      title,
      tags,
      featuredimage
    }
  };
};

export default Post;