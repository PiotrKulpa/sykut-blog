import React from 'react';
import { IMAGE_PLACEHOLDER } from '../constants';
import useStringSlicer from '../hooks/useStringSlicer';

const PopularBlog = ({ popularPosts = [] }) => {

  return (
    <section class="blog-wrap-layout2">
      <div class="container">
        <div className="section-heading text-center heading-dark heading-layout2">
          <h2>Wyróżnione</h2>
          <div className="item-subtitle">Zobacz poplularne wpisy</div>
        </div>
        {popularPosts && popularPosts.map(({
          date = '',
          htmlString = '',
          title = '',
          tags = '',
          galleryImages = [],
        }, i) => {
          const convertedDate = date ? new Date(date).toLocaleDateString() : '';
          const featuredImage = galleryImages[0] || IMAGE_PLACEHOLDER;
          return <div key={i} className="row no-gutters">
            {i % 2 !== 0 ?
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
                      <a href="single-blog1.html">{title}</a>
                    </h3>
                    <p dangerouslySetInnerHTML = {{ __html: useStringSlicer(htmlString, 0, 177) }} />
                    <ul className="entry-meta">
                      <li>Autor:<a href="#"> Dr J. Sykut </a>
                      </li>
                      <li> {convertedDate}</li>
                    </ul>
                  </div>
                </div>
              </>
              :
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
                      <a href="single-blog1.html">{title}</a>
                    </h3>
                    <p>Aimply dummy text of the printing and type setting area industry. Lorem Ipsum has been
                    the industry's
        standard dumen been the industry'so.</p>
                    <ul className="entry-meta">
                      <li>Autor:<a href="#"> Dr J. Sykut </a>
                      </li>
                      <li>{`${convertedDate}`}</li>
                    </ul>
                  </div>
                </div>
              </>
            }
          </div>

        })}
      </div>
    </section>

  )
}

export default PopularBlog;


{/* <div dangerouslySetInnerHTML = {{ __html: content }} /> */ }
