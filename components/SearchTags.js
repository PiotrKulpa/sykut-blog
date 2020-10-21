import React from 'react';
import Link from "next/link";
import { useRouter } from 'next/router'

import useStringSlicer from '../hooks/useStringSlicer';
import { POST_URL_PATH } from '../constants';

const SearchTags = ({ posts }) => {
  const router = useRouter();
  const searchText = router.query.id || '';
  const filteredPosts = posts &&
    posts.filter((el) => el.tags.toLowerCase().includes(searchText.toLowerCase()));

  return (
    <div>
      {filteredPosts.length > 0 ?
        filteredPosts.map(({
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
                    <Link href={`${POST_URL_PATH}${slug}`}>
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
      <p>Nie znaleziono wpisów dla tagów: <strong>{searchText}</strong></p>}
        <div
          className="pagination-layout1 margin-b-30 custom-btn-show-more">
        </div>
    </div>
  )
}

export default SearchTags;