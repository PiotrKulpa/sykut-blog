import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import parseMD from "parse-md";

import Banner from "../components/Banner";
import AboutUs from "../components/AboutUs";
import LatestBlog from "../components/LatestBlog";
import Brands from "../components/Brands";
import PopularBlog from "../components/PopularBlog";

const Home = ({ posts, popularPosts }) => {
  return (
    <>
      <Banner />
      <AboutUs />
      <LatestBlog {...{ posts }} />
      <PopularBlog {...{ popularPosts }} />
      <Brands />
    </>
  );
};

export const getStaticProps = async () => {
  const files = fs.readdirSync("content/blog");
  const mappedPosts =
    files &&
    files.map((filename) => {
      const markdownWithMetadata = fs.readFileSync(
        path.join("content/blog", filename),
        "utf8"
      );
      const {
        metadata: {
          date = "",
          title = "",
          tags = "",
          content = "",
          galleryImages = [],
          isPopular = false,
        },
      } = parseMD(markdownWithMetadata);

      const parsedMarkdown = matter(content);
      const htmlString = marked(parsedMarkdown.content);

      return {
        slug: filename.replace(".md", ""),
        date: date.toString(),
        title,
        tags,
        htmlString,
        galleryImages,
        isPopular,
      };
    });

  const popularPosts =
    (mappedPosts &&
      mappedPosts.filter(({ isPopular }) => isPopular === true)) ||
    [];

  return {
    props: {
      popularPosts,
      posts: mappedPosts
        .sort((a, b) => {
          var dateA = new Date(a.date);
          var dateB = new Date(b.date);
          return dateA - dateB;
        })
        .reverse()
        .slice(0, 6),
    },
  };
};

export default Home;
