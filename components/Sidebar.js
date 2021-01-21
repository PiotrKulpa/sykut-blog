import React, { useRef } from 'react';
import { useRouter } from 'next/router';

import { POST_URL_PATH, IMAGE_PLACEHOLDER } from '../constants';

const Sidebar = ({ posts, tags }) => {

  const router = useRouter();
  const inputEl = useRef(null);

  const search = () => {
    const searchText = inputEl.current.value;
    searchText && router.push(`/szukaj?id=${searchText}`);
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      search();
    }
  }

  return (
    <div className="col-xl-3 col-lg-4 col-12 sidebar-widget-area sidebar-break-md">
      <div className="widget widget-search-box">
        <div className="input-group stylish-input-group">
          <input 
            ref={inputEl}
            onKeyDown={handleKeyDown} 
            type="text" 
            className="form-control" 
            placeholder="Szukaj . . ." 
          />
          <span className="input-group-addon">
            <button onClick={search} type="submit">
              <span className="flaticon-search" aria-hidden="true" />
            </button>
          </span>
        </div>
      </div>
      <div className="widget widget-recent-blog">
        <div className="section-header header-dark heading-layout3">
          <h3>Ostatnie wpisy</h3>
        </div>
        {posts && posts.slice(0, 6).map(({ 
          slug,
          date,
          title,
          galleryImages = [],  
        }, i) => {
          const convertedDate = date ? new Date(date).toLocaleString() : '';
          const featuredImage =  galleryImages[0] || IMAGE_PLACEHOLDER;
          return <div key={i} className="media">
            <div className="item-img">
              <a href={`${POST_URL_PATH}${slug}`}>
                <img src={featuredImage} alt="Ostatni wpis" />
              </a>
            </div>
            <div className="media-body space-sm">
              <h5 className="post-title">
                <a href={`${POST_URL_PATH}${slug}`}>{title}</a>
              </h5>
        <div className="post-date">{convertedDate}</div>
            </div>
          </div>
        })}
      </div>
      <div className="widget widget-tag">
        <div className="section-header header-dark heading-layout3">
          <h3>Tagi</h3>
        </div>
        <ul>
          {tags && tags.map((el, i) => {
             return <li key={i}>
                      <a href={`/tagi?id=${el.trim()}`}>{el.trim().toLowerCase()}</a>
                    </li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar;
