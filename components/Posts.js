import React from 'react';
import Link from "next/link";

const Posts = ({ posts }) => {
console.log(posts);
    return (
        <div>
            {posts.length > 0 ?
                posts.map(({
                    id = 0,
                    slug = '',
                    date = '',
                    htmlString = '',
                    title = '',
                    content = '',
                    featuredimage = '',
                    tags = '',
                }, index) => {
                    const filteredTag = tags.split(',');
                    console.log(htmlString);
                    return (
                        <div key={index} className="col-xl-12 col-lg-6 col-md-6 col-12">
                            <div className="blog-box-layout5">
                                <div className="media media-none--lg">
                                    <div className="item-img">
                                        <Link href={`/blog/${slug}`}>
                                            <a><img src={featuredimage || '/images/placeholder.jpg'} alt="Blog" /></a>
                                        </Link>
                                    </div>
                                    <div className="media-body">
                                        <ul className="entry-meta">
                                            {filteredTag.length > 0 && filteredTag.map((el, i) => (<li key={i}><a href={`/tagi/${el}/1`}>{el}</a></li>))}
                                        </ul>
                                        <h3 className="item-title">
                                            <Link href={`/blog/${slug}`}>
                                                <a>{title}</a>
                                            </Link>
                                        </h3>
                                        <p  dangerouslySetInnerHTML={{ __html: htmlString }} />
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