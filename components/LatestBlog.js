import React from 'react';
import Link from 'next/link';

import { POST_URL_PATH } from '../constants';

const LatestBlog = ({ posts }) => {

  return (
    <section className="portfolio-wrap-layout2">
      <div className="container">
        <div className="section-heading text-center heading-dark heading-layout2">
          <h2>Ostatnie wpisy</h2>
          <div className="item-subtitle">zobacz</div>
        </div>
        <div className="row">
          {posts && posts.map(({
            title = '',
            tags = '',
            featuredImage = '',
            slug,
          }, i) =>
            <div key={i} className="col-lg-4 col-sm-6">
              <div className="portfolio-box-layout2">
                <div className="item-img">
                  <img src={featuredImage} alt="Project 11" />
                  <Link href={`${POST_URL_PATH}${slug}`}>
                    <a  href="#" className="item-btn inline-popup">
                      <i className="flaticon-next" />
                    </a>
                  </Link>
                </div>
                <div className="item-content">
                  <h3 className="item-title">
                    <a href="single-portfolio1.html">{title}</a>
                  </h3>
                  <div className="item-subtitle">
                    <Link href="#"><a >{tags}</a></Link>
                  </div>
                </div>
              </div>
              <div id="test-popup1" className="popup-content mfp-hide">
                <div className="media media-none--xs">
                  <div className="item-img">
                    {/* <img src="img/project/project11.jpg" alt="project" /> */}
                  </div>
                  <div className="media-body">
                    <h2 className="item-title"><Link href="#"><a>Paper Mockup</a></Link></h2>
                    <ul className="item-category">
                      <li><i className="fas fa-arrow-right" />Brand Identity</li>
                      <li><i className="fas fa-arrow-right" />Web Design &amp; UI</li>
                      <li><i className="fas fa-arrow-right" />Development &amp; CMS</li>
                      <li><i className="fas fa-arrow-right" />Photography</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="loadmore-layout2">
          <Link href="/blog/strona/1" ><a className="item-btn">Zobacz więcej wpisów</a></Link>
        </div>
      </div>
    </section>
  )
}

export default LatestBlog;