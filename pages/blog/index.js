import React from 'react';
import { attributes, react as BlogContent } from '../../content/blog.md';
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import parseMD from 'parse-md';


const index = ({ posts }) => {
  return (
    <>
      <div>
        {/* section */}
        <div className="section layout_padding">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="full">
                  <div className="heading_main text_align_left">
                    <div className="left">
                      <p className="section_count">01</p>
                    </div>
                    <div className="right">
                      <p className="small_tag">SERVICES</p>
                      <h2><span className="theme_color">How to provide</span> tools that help anyone give a voice to their ideas</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row margin-top_30">

              {/* loop */}
              {posts.map(post => {
                const { slug = '', date = '', htmlString = '', title = '' } = post;
                // dangerouslySetInnerHTML={{ __html: post.htmlString }}
                return (

                  <div className="col-sm-6 col-md-4">
                    <Link href={`/blog/${slug}`}>
                      <a>
                        <div className="service_blog">
                          <div className="service_icons">
                            <img width={75} height={75} src="img/icon-1.png" alt="#" />
                          </div>
                          <div className="full">
                            <h4>{title}</h4>
                          </div>
                          <div className="full">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since</p>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </div>

                );
              })}

            </div>
          </div>
        </div>
        {/* end section */}
        {/* section */}
        <div className="section layout_padding dark_bg">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="full">
                  <div className="heading_main text_align_left white_fonts">
                    <div className="left">
                      <p className="section_count">02</p>
                    </div>
                    <div className="right">
                      <h2>Create <span className="theme_color">PERSONALISED Business</span></h2>
                      <p className="large">What we done</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row margin-top_30 counter_section">
              <div className="col-sm-12 col-md-4">
                <div className="counter margin-top_30">
                  <h2 className="timer count-title count-number" data-to={23} data-speed={1500} />
                  <p className="count-text">NOMINATIONS</p>
                </div>
              </div>
              <div className="col-sm-12 col-md-4">
                <div className="counter margin-top_30">
                  <h2 className="timer count-title count-number" data-to={7} data-speed={1500} />
                  <p className="count-text">AWARDS</p>
                </div>
              </div>
              <div className="col-sm-12 col-md-4">
                <div className="counter margin-top_30">
                  <h2 className="timer count-title count-number" data-to={31} data-speed={1500} />
                  <p className="count-text">AGENCIES</p>
                </div></div>
            </div>
          </div>
        </div>
        {/* end section */}
        {/* section */}
        <div className="section layout_padding">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="full">
                  <div className="heading_main text_align_left">
                    <div className="left">
                      <p className="section_count">03</p>
                    </div>
                    <div className="right">
                      <p className="small_tag">Portfolio</p>
                      <h2><span className="theme_color">CHOOSE A</span> PROFESSIONAL DESIGN</h2>
                      <p className="large">Websites</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row margin-top_30">
              <div className="col-lg-12 margin-top_30">
                <div id="demo" className="carousel slide" data-ride="carousel">
                  {/* The slideshow */}
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12">
                          <img className="img-responsive" src="images/img1.png" alt="#" />
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                          <img className="img-responsive" src="images/img2.png" alt="#" />
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                          <img className="img-responsive" src="images/img3.png" alt="#" />
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                          <img className="img-responsive" src="images/img4.png" alt="#" />
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12">
                          <img className="img-responsive" src="images/img1.png" alt="#" />
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                          <img className="img-responsive" src="images/img2.png" alt="#" />
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                          <img className="img-responsive" src="images/img3.png" alt="#" />
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                          <img className="img-responsive" src="images/img4.png" alt="#" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Left and right controls */}
                  <a className="carousel-control-prev" href="#demo" data-slide="prev">
                    <span className="carousel-control-prev-icon" />
                  </a>
                  <a className="carousel-control-next" href="#demo" data-slide="next">
                    <span className="carousel-control-next-icon" />
                  </a>
                </div>
              </div>
              <div className="col-lg-12">
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their</p>
              </div>
              <div className="col-lg-12">
                <div className="full center">
                  <a href="about.html" className="hvr-radial-out button-theme">See More &gt;</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end section */}
      </div>

      <p>
        Strona główna bloga
      </p>
      <BlogContent />
      <div>
      </div>

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
          htmlString
        }

      })
    }
  };
};

export default index;