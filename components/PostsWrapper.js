import React from "react";
import Sidebar from "./Sidebar";

const PostsWrapper = ({ children = {}, lastPosts = [], tags = [] }) => {
  return (
    <section className="blog-wrap-layout4">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 col-lg-8">
            <div className="row">{children}</div>
          </div>
          <Sidebar posts={lastPosts} {...{ tags }} />
        </div>
      </div>
    </section>
  );
};

export default PostsWrapper;
