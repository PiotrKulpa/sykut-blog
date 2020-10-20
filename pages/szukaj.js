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

// export const getStaticProps = async () => {
//   const files = fs.readdirSync("content/blog");

//   return {
//     props: {
//       posts: files && files.map(filename => {
//         const markdownWithMetadata = fs
//           .readFileSync(path.join("content/blog", filename), 'utf8')
//         const {
//           metadata: {
//             date = '',
//             title = '',
//             tags = '',
//             featuredImage = '',
//             content = '',
//           },
//         } = parseMD(markdownWithMetadata);

//         const parsedMarkdown = matter(content);
//         const htmlString = marked(parsedMarkdown.content);

//         return {
//           slug: filename.replace(".md", ""),
//           date: date.toString(),
//           title,
//           featuredImage,
//           tags,
//           htmlString,
//         }

//       })
//         .sort((a, b) => {
//           var dateA = new Date(a.date);
//           var dateB = new Date(b.date);
//           return dateA - dateB;
//         })
//         .reverse()
//     }
//   };
// };

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