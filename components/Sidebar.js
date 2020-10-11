import React, { useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/router'

const Sidebar = ({ posts }) => {

  const router = useRouter();
  const inputEl = useRef(null);
  const [filteredTags, setFilteredTags] = useState([]);

  const search = () => {
    const searchText = inputEl.current.value;
    searchText && router.push(`/szukaj?id=${searchText}`,
      undefined, { shallow: true });
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      search();
    }
  }

  useEffect(() => {
    const getAllTags = posts && posts.map(({ tags }) => {
      return tags
    });
    const formatAllTags = getAllTags && getAllTags.join(',').split(',');
    setFilteredTags(formatAllTags);
   
  }, [posts]);

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
          featuredImage,  
        }, i) => {
          const convertedDate = date ? new Date(date).toLocaleString() : '';
          return <div key={i} className="media">
            <div className="item-img">
              <a href={`blog/${slug}`}>
                <img src={featuredImage} alt="Ostatni wpis" />
              </a>
            </div>
            <div className="media-body space-sm">
              <h5 className="post-title">
                <a href="#">{title}</a>
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
          {filteredTags && filteredTags.map((el) => {
             return <li>
             <a href={`/tagi?id=${el.trim()}`}>{el.trim().toLowerCase()}</a>
           </li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar;
