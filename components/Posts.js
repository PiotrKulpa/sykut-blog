import React, { useState, useEffect } from 'react';
import Link from "next/link";

import useStringSlicer from '../hooks/useStringSlicer';

const Posts = ({ posts }) => {
  const defaultCount = 1;
  const[counter, setCounter] = useState(defaultCount);
 
  const showMore = () => {
    const sessionCounter = Number(window.sessionStorage.getItem("sessionCounter")) ||  defaultCount;
    console.log(sessionCounter);
    window.sessionStorage.setItem("sessionCounter", sessionCounter + defaultCount)
    
   
    setCounter((prev) => prev + defaultCount)
  }
  
  useEffect(() => {
    const sessionCounter = Number(window.sessionStorage.getItem("sessionCounter"));
    setCounter(sessionCounter || defaultCount);
  }, []);

  return (
    <div>
      {posts.length > 0 ?
        posts.slice(0, counter).map(({
          slug = '',
          date = '',
          htmlString = '',
          title = '',
          featuredImage = '',
          tags = '',
        }, index) => {
          const filteredTag = tags.split(',');
          const convertedDate = date ? new Date(date).toLocaleString() : '';
          return (
            <div key={index} className="col-xl-12 col-lg-6 col-md-6 col-12">
              <div className="blog-box-layout5">
                <div className="media media-none--lg">
                  <div className="item-img">
                    <Link href={`/blog/${slug}`}>
                      <a>
                        <img 
                          src={featuredImage || '/images/placeholder.jpg'} 
                          alt="Blog" 
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="media-body">
                    <ul className="entry-meta">
                      <li>{convertedDate}</li>
                      <li>
                      {filteredTag.length > 0 && 
                        filteredTag.map((el, i) => 
                        (<a key={i} href={`/tagi/${el}/1`}>{el}</a>))
                      }
                      </li>
                    </ul>
                    <h3 className="item-title">
                      <Link href={`/blog/${slug}`}>
                        <a>{title}</a>
                      </Link>
                    </h3>
                    <div 
                      style={{marginBottom: '20px'}}
                      dangerouslySetInnerHTML=
                        {{ __html: useStringSlicer(htmlString, 0, 177) }} />
                    <Link
                      
                      href={`/blog/${slug}`}
                    >
                      <a className="item-btn">
                          Czytaj dalej <i className="flaticon-next"></i>
                      </a>
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
        <div
          className="pagination-layout1 margin-b-30 custom-btn-show-more">
          <button 
            className={`item-back-btn${counter >= posts.length ? " custom-btn-disabled" : ""}`}
            onClick={showMore}
            >
              Pokaż kolejne
          </button>
        </div>
    </div>
  )
}

export default Posts;