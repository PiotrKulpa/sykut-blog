import React from "react";
import Link from "next/link";

import useStringSlicer from "../hooks/useStringSlicer";
import Pagination from "../components/Pagination";
import { POST_URL_PATH, IMAGE_PLACEHOLDER } from "../constants";

const Posts = ({ posts = [], totalPages = [] }) => {
  return (
    <>
      {posts.length > 0 ? (
        posts.map(
          (
            {
              slug = "",
              date = "",
              htmlString = "",
              title = "",
              tags = "",
              galleryImages = [],
            },
            index
          ) => {
            const filteredTag = tags.split(",");
            const convertedDate = date ? new Date(date).toLocaleString() : "";
            const featuredImage = galleryImages[0] || IMAGE_PLACEHOLDER;
            return (
              <div key={index} className="col-xl-12 col-lg-6 col-md-6 col-12">
                <div className="blog-box-layout5">
                  <div className="media media-none--lg">
                    <div className="item-img">
                      <Link href={`${POST_URL_PATH}${slug}`}>
                        <a>
                          <img src={featuredImage} alt="Blog" />
                        </a>
                      </Link>
                    </div>
                    <div className="media-body">
                      <ul className="entry-meta">
                        <li>{convertedDate}</li>
                        <li>
                          {filteredTag.length > 0 &&
                            filteredTag.map((el, i) => (
                              <Link key={i} href={`/tagi?id=${el.trim()}`}>
                                <a>{el}</a>
                              </Link>
                            ))}
                        </li>
                      </ul>
                      <h3 className="item-title">
                        <Link href={`${POST_URL_PATH}${slug}`}>
                          <a>{title}</a>
                        </Link>
                      </h3>
                      <div
                        style={{ marginBottom: "20px" }}
                        dangerouslySetInnerHTML={{
                          __html: useStringSlicer(htmlString, 0, 177),
                        }}
                      />
                      <Link href={`${POST_URL_PATH}${slug}`}>
                        <a className="item-btn">
                          Czytaj dalej <i className="flaticon-next"></i>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        )
      ) : (
        <p>Nie znaleziono wpisów.</p>
      )}
      <div className="col-12 pagination-layout1 margin-b-30 custom-btn-show-more">
        <Pagination {...{ totalPages }} path="/blog/strona/" />
      </div>
    </>
  );
};

export default Posts;
