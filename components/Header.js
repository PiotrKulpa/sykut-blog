import React from 'react';

const Header = () => {
  return (
    <header className="top-header">
      <nav className="navbar header-nav navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="/"><img src="img/logo.png" alt="image" /></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-wd" aria-controls="navbar-wd" aria-expanded="false" aria-label="Toggle navigation">
            <span />
            <span />
            <span />
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbar-wd">
            <ul className="navbar-nav">
              <li><a className="nav-link active" href="index.html">Home</a></li>
              <li><a className="nav-link" href="about.html">Aboutus</a></li>
              <li><a className="nav-link" href="services.html">Services</a></li>
              <li><a className="nav-link" href="/blog">Blog</a></li>
              <li><a className="nav-link" href="contact.html">Contact us</a></li>
              <li><a className="nav-link active" style={{ background: '#f2184f', color: '#fff' }} href="#">Sinup now</a></li>
            </ul>
          </div>
          <div className="search-box">
            <input type="text" className="search-txt" placeholder="Search" />
            <a className="search-btn">
              <img src="images/search_icon.png" alt="#" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;