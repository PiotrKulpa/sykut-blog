import React from "react";
import { POST_URL_PATH, IMAGE_PLACEHOLDER } from "../constants";
import useStringSlicer from "../hooks/useStringSlicer";
import Link from "next/link";

const PopularBlog = ({ popularPosts = [] }) => {
  const stringSlice = useStringSlicer();

  return (
    <section className="blog-wrap-layout2">
      <div className="container">
        <div className="section-heading text-center heading-dark heading-layout2">
          <h2>Wyróżnione</h2>
          <div className="item-subtitle">Zobacz poplularne wpisy</div>
        </div>
        {popularPosts &&
          popularPosts.map(
            (
              {
                date = "",
                htmlString = "",
                title = "",
                galleryImages = [],
                slug = "",
              },
              i
            ) => {
              const convertedDate = date
                ? new Date(date).toLocaleDateString()
                : "";
              const featuredImage = galleryImages[0] || IMAGE_PLACEHOLDER;
              return (
                <div key={i} className="row no-gutters">
                  {i % 2 !== 0 ? (
                    <>
                      <div className="col-lg-6">
                        <div className="blog-box-layout2">
                          <img src={featuredImage} alt="Blog" />
                        </div>
                      </div>
                      <div className="col-lg-6 d-flex align-items-center">
                        <div className="blog-box-layout3">
                          <div className="item-subtitle"></div>
                          <h3 className="item-title">
                            <Link href={`${POST_URL_PATH}${slug}`}>
                              <a>{title}</a>
                            </Link>
                          </h3>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: stringSlice(htmlString, 0, 177),
                            }}
                          />
                          <Link href={`${POST_URL_PATH}${slug}`}>
                            <a className="item-btn">
                              Czytaj dalej <i className="flaticon-next"></i>
                            </a>
                          </Link>
                          <ul className="entry-meta">
                            <li>
                              <a href="#"> Dr J. Sykut, {convertedDate}</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="col-lg-6 order-lg-2">
                        <div className="blog-box-layout2">
                          <img src={featuredImage} alt="Blog" />
                        </div>
                      </div>
                      <div className="col-lg-6 order-lg-1 d-flex align-items-center">
                        <div className="blog-box-layout3">
                          <div className="item-subtitle"></div>
                          <h3 className="item-title">
                            <Link href={`${POST_URL_PATH}${slug}`}>
                              <a>{title}</a>
                            </Link>
                          </h3>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: stringSlice(htmlString, 0, 177),
                            }}
                          />
                          <Link href={`${POST_URL_PATH}${slug}`}>
                            <a className="item-btn">
                              Czytaj dalej <i className="flaticon-next"></i>
                            </a>
                          </Link>
                          <ul className="entry-meta">
                            <li>
                              <a href="#"> Dr J. Sykut, {convertedDate}</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            }
          )}
      </div>
    </section>
  );
};

export default PopularBlog;
