import React, { useEffect, useState } from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import marked from "marked";
import parseMD from "parse-md";
import { useRouter } from "next/router";
import Slider from "react-slick";

import Sidebar from "../../../components/Sidebar";
import { BLOG_FILES_PATH } from "../../../constants";
import getParsedPosts from "../../../helpers/getParsedPosts";
import Breadcrumbs from "../../../components/Breadcrumbs";

import Link from "next/link";

const Post = ({
  htmlString = "",
  date = "",
  title = "",
  tags = "",
  lastPosts = [],
  sidebarTags = [],
  galleryImages = [],
  blogVideoLink = "",
}) => {
  const [baseUrl, setBaseUrl] = useState("");

  useEffect(() => {
    setBaseUrl(window.location.href);
  }, []);

  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  const filteredTag = tags.split(",");

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Breadcrumbs ovverideLast={title} />
      <section className="single-blog-wrap-layout1">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-8">
              <div className="single-blog-box-layout1">
                <div className="blog-img">
                  <Slider {...settings}>
                    {blogVideoLink && (
                      <video width="100%" height="100%" controls>
                        <source src={blogVideoLink} type="video/mp4" />
                        Twoja przeglądarka nie wspiera plików wideo typu mp4.
                      </video>
                    )}
                    {galleryImages &&
                      galleryImages.map((el, i) => {
                        return (
                          <div key={i}>
                            <img src={el} alt="blog" />
                          </div>
                        );
                      })}
                  </Slider>
                </div>
                <div className="blog-content">
                  <ul className="entry-meta">
                    <li>{date}</li>
                    <li>
                      {filteredTag &&
                        filteredTag.map((el, i) => (
                          <Link key={i} href={`/tagi?id=${el.trim()}`}>
                            <a>{el}</a>
                          </Link>
                        ))}
                    </li>
                  </ul>
                  <h2 className="blog-title">{title}</h2>
                  <ul className="post-action">
                    <li>
                      <div className="media media-none--xs">
                        <img
                          src="/images/avatar.jpg"
                          alt="Blog"
                          className="media-img-auto"
                        />
                        <div className="media-body space-sm">
                          <h5 className="item-title">
                            Autor <span>Dr J. Sykut</span>
                          </h5>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div dangerouslySetInnerHTML={{ __html: htmlString }} />
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <ul className="blog-tag">
                      <li></li>
                    </ul>
                  </div>
                  <div className="col-sm-6">
                    <ul className="blog-social">
                      <li>
                        Share:
                        <a
                          href={`https://www.facebook.com/sharer/sharer.php?u=${baseUrl}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a
                          href={`https://twitter.com/intent/tweet?url=${baseUrl}`}
                        >
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a
                          href={`https://www.linkedin.com/sharing/share-offsite/?url=${baseUrl}`}
                        >
                          {" "}
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a
                          href={`https://plus.google.com/share?url=${baseUrl}`}
                        >
                          <i className="fab fa-google-plus-g"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="pagination-layout1 margin-b-30">
                  <button className="item-back-btn" onClick={goBack}>
                    <i className="flaticon-back"></i> Wróć do wpisów
                  </button>
                </div>
              </div>
            </div>
            <Sidebar posts={lastPosts} tags={sidebarTags}></Sidebar>
          </div>
        </div>
      </section>
    </>
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync("content/blog");
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMetadata = fs.readFileSync(
    path.join(BLOG_FILES_PATH, slug + ".md"),
    "utf8"
  );
  const {
    metadata: {
      date = "",
      title = "",
      tags = "",
      featuredImage = "",
      content = "",
      galleryImages = [],
      blogVideoLink = "",
    },
  } = parseMD(markdownWithMetadata);
  const parsedMarkdown = matter(content);
  const htmlString = marked(parsedMarkdown.content);

  const files = fs.readdirSync(BLOG_FILES_PATH);
  const sidebarTags = Array.from(
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
      htmlString,
      date: date.toLocaleString(),
      title,
      tags,
      featuredImage,
      lastPosts: getParsedPosts(files).slice(0, 6),
      sidebarTags,
      galleryImages,
      blogVideoLink,
    },
  };
};

export default Post;
