
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import parseMD from 'parse-md';

import Banner from '../components/Banner';
import AboutUs from '../components/AboutUs';
import LatestBlog from '../components/LatestBlog';
import Brands from '../components/Brands';
import PopularBlog from '../components/PopularBlog';

const Home = ({ posts }) => {
    return (
      <>
      <Banner />
      <AboutUs />
      <LatestBlog { ...{posts}}/>
      <Brands />
      <PopularBlog />
      </>
    )
}

export const getStaticProps = async () => {
  const files = fs.readdirSync("content/blog");
console.log(files);
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
  .slice(0, 3)
    }
  };
};

export default Home;