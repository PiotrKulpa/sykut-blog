import React from 'react';
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import parseMD from 'parse-md';


const index = ({ posts }) => {

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
console.log(posts);
  return (
    <>
     <p>
       Blogd
     </p>
     <p>
       Blog
     </p>
     <p>
       Blog
     </p>
     <p>
       Blog
     </p>
     <p>
       Blog
     </p>

    </>
  )
}

export const getStaticProps = async () => {
  const files = fs.readdirSync("content/blog");
console.log('wyloguj',files);

  return {
    props: {
      posts: files && files.map(filename => {
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