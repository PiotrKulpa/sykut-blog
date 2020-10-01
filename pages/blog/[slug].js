import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import marked from "marked";
import parseMD from 'parse-md';
import { useRouter } from 'next/router';


const Post = (
  {
    htmlString = '',
    date = '',
    title = '',
    featuredImage = '',
    tags = '',
  }
) => {

  const router = useRouter()

  const goBack = () => {
    router.back();
  };

  const filteredTag = tags.split(',');

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <section className="single-blog-wrap-layout1">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-8">
              <div className="single-blog-box-layout1">
                <div className="blog-img">
                  <img src={featuredImage} alt="blog" />
                </div>
                <div className="blog-content">
                  <ul className="entry-meta">
                    <li>{date}</li>
                    <li>
                      {filteredTag && 
                        filteredTag.map((el, i) => 
                          <a key={i} href={el}>{el}</a>)}
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
                          <h5 
                            className="item-title">Autor <span>Dr J. Sykut</span>
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
                      <li>Tags: <a href="/">Business,</a><a href="/">Trend</a></li>
                    </ul>
                  </div>
                  <div className="col-sm-6">
                    <ul className="blog-social">
                      <li>Share:
                        <a href="/"><i className="fab fa-facebook-f"></i></a>
                        <a href="/"><i className="fab fa-twitter"></i></a>
                        <a href="/"> <i className="fab fa-linkedin-in"></i></a>
                        <a href="/"><i className="fab fa-google-plus-g"></i></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="pagination-layout1 margin-b-30">
                  <button 
                    className="item-back-btn" 
                    onClick={goBack}>
                      <i className="flaticon-back"></i> Wróć do wpisów
                  </button>
                </div>
              </div>

              {/* <>
                  <div className="pagination-layout1 margin-b-30">
                    <button className="item-back-btn" onClick={goBack}><i className="flaticon-back"></i> Wróć do wpisów</button>
                  </div>
                </> */}

            </div>
            {/* <Sidebar></Sidebar> */}
          </div>
        </div>
      </section>
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
      featuredImage = '',
      content = '',
    },
  } = parseMD(markdownWithMetadata);
  const parsedMarkdown = matter(content);
  const htmlString = marked(parsedMarkdown.content);

  return {
    props: {
      htmlString,
      date: date.toLocaleString(),
      title,
      tags,
      featuredImage
    }
  };
};

export default Post;