import React from 'react';
import Link from "next/link";

import useStringSlicer from '../hooks/useStringSlicer';

//TODO: short description hook

const Posts = ({ posts }) => {
  console.log(posts);

  const slicedContent = useStringSlicer
  return (
    <div>
      {posts.length > 0 ?
        posts.map(({
          slug = '',
          date = '',
          htmlString = '',
          title = '',
          featuredImage = '',
          tags = '',
        }, index) => {
          const filteredTag = tags.split(',');

          return (
            <div key={index} className="col-xl-12 col-lg-6 col-md-6 col-12">
              <div className="blog-box-layout5">
                <div className="media media-none--lg">
                  <div className="item-img">
                    <Link href={`/blog/${slug}`}>
                      <a><img src={featuredImage || '/images/placeholder.jpg'} alt="Blog" /></a>
                    </Link>
                  </div>
                  <div className="media-body">
                    <ul className="entry-meta">
                      <li>{date}</li>
                      <li>
                      {filteredTag.length > 0 && filteredTag.map((el, i) => (<a key={i} href={`/tagi/${el}/1`}>{el}</a>))}
                      </li>
                    </ul>
                    <h3 className="item-title">
                      <Link href={`/blog/${slug}`}>
                        <a>{title}</a>
                      </Link>
                    </h3>
                    <p 
                    dangerouslySetInnerHTML=
                      {{ __html: useStringSlicer(htmlString, 0, 177) }} />
                    <Link
                      className="item-btn"
                      href={`/blog/${slug}`}
                    >
                      <a>Czytaj dalej <i className="flaticon-next"></i></a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )
        }
        )
        :
        <p>Nie znaleziono wpisów.</p>}
    </div>
  )
}

export default Posts;