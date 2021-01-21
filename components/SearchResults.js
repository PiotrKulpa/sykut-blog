import React from 'react';
import Link from "next/link";
import { useRouter } from 'next/router'

import useStringSlicer from '../hooks/useStringSlicer';
import { POST_URL_PATH, IMAGE_PLACEHOLDER } from '../constants';

const SearchResults = ({ posts, pageName = '' }) => {
  const router = useRouter();
  const searchText = router.query.id || '';
  const filteredPosts = posts && 
  pageName === 'search' ? 
    posts.filter((el) => el.title.toLowerCase().includes(searchText.toLowerCase()) || 
    el.htmlString.toLowerCase().includes(searchText.toLowerCase())) :
    posts.filter((el) => el.tags.toLowerCase().includes(searchText.toLowerCase()));

  return (
    <>
      {filteredPosts.length > 0 ?
        filteredPosts.slice(0, 100).map(({
          slug = '',
          date = '',
          htmlString = '',
          title = '',
          tags = '',
          galleryImages = [],
        }, index) => {
          const filteredTag = tags.split(',');
          const convertedDate = date ? new Date(date).toLocaleString() : '';
          const featuredImage =  galleryImages[0] || IMAGE_PLACEHOLDER;
          return (
            <div key={index} className="col-xl-12 col-lg-6 col-md-6 col-12">
              <div className="blog-box-layout5">
                <div className="media media-none--lg">
                  <div className="item-img">
                    <Link href={`${POST_URL_PATH}${slug}`}>
                      <a>
                        <img 
                          src={featuredImage} 
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
                        (<Link key={i} href={`/tagi/?id=${el.trim()}`}><a>{el}</a></Link>))
                      }
                      </li>
                    </ul>
                    <h3 className="item-title">
                      <Link href={`${POST_URL_PATH}${slug}`}>
                        <a>{title}</a>
                      </Link>
                    </h3>
                    <div 
                      style={{marginBottom: '20px'}}
                      dangerouslySetInnerHTML=
                        {{ __html: useStringSlicer(htmlString, 0, 177) }} />
                    <Link
                      
                      href={`${POST_URL_PATH}${slug}`}
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
      <p>Nie znaleziono wpisów dla hasła: <strong>{searchText}</strong></p>}
        <div
          className="pagination-layout1 margin-b-30 custom-btn-show-more">
         
        </div>
    </>
  )
}

export default SearchResults;