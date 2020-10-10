import React from 'react';

const Sidebar = () => {
    return (
       <div className="col-xl-3 col-lg-4 col-12 sidebar-widget-area sidebar-break-md">
  <div className="widget widget-search-box">
    <div className="input-group stylish-input-group">
      <input type="text" className="form-control" placeholder="Szukaj . . ." />
      <span className="input-group-addon">
        <button type="submit">
          <span className="flaticon-search" aria-hidden="true" />
        </button>
      </span>
    </div>
  </div>
  <div className="widget widget-recent-blog">
    <div className="section-header header-dark heading-layout3">
      <h3>Ostatnie wpisy</h3>
    </div>
    <div className="media">
      <div className="item-img">
        <a href="#">
          <img src="img/blog/blog7.jpg" alt="News" />
        </a>
      </div>
      <div className="media-body space-sm">
        <h5 className="post-title">
          <a href="#">Page Builder blog grow 2018</a>
        </h5>
        <div className="post-date">23 June, 2018</div>
      </div>
    </div>
    <div className="media">
      <div className="item-img">
        <a href="#">
          <img src="img/blog/blog7.jpg" alt="News" />
        </a>
      </div>
      <div className="media-body space-sm">
        <h5 className="post-title">
          <a href="#">Page Builder blog grow 2018</a>
        </h5>
        <div className="post-date">23 June, 2018</div>
      </div>
    </div>
    <div className="media">
      <div className="item-img">
        <a href="#">
          <img src="img/blog/blog7.jpg" alt="News" />
        </a>
      </div>
      <div className="media-body space-sm">
        <h5 className="post-title text-row-2">
          <a href="#">Page Builder blog grow 2018</a>
        </h5>
        <div className="post-date">23 June, 2018</div>
      </div>
    </div>
    <div className="media">
      <div className="item-img">
        <a href="#">
          <img src="img/blog/blog7.jpg" alt="News" />
        </a>
      </div>
      <div className="media-body space-sm">
        <h5 className="post-title">
          <a href="#">Page Builder blog grow 2018</a>
        </h5>
        <div className="post-date">23 June, 2018</div>
      </div>
    </div>
  </div>
  <div className="widget widget-tag">
    <div className="section-header header-dark heading-layout3">
      <h3>Tagi</h3>
    </div>
    <ul>
      <li>
        <a href="#">Advertising</a>
      </li>
      <li>
        <a href="#">Electonics</a>
      </li>
      <li>
        <a href="#">Food</a>
      </li>
      <li>
        <a href="#">Mobile</a>
      </li>
      <li>
        <a href="#">Social</a>
      </li>
    </ul>
  </div>
</div>

    )
}

export default Sidebar;