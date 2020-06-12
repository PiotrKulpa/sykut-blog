import React from 'react';
import Link from 'next/link';
import { attributes, react as ServicesContent } from '../content/componentServices.md';

const Services = () => {

  const {
    title = '',
    subtitle = '',
    serviceList = [],
  } = attributes;

  return (
    <div className="section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="full">
              <div className="heading_main text_align_left">
                <div className="left">
                  <p className="section_count">02</p>
                </div>
                <div className="right">
                  <p className="small_tag">{title}</p>
                  <h2>{subtitle}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row margin-top_30">
          {serviceList && serviceList.map(({ btnUrl, imgUrl, title, subtitle }, i) =>
            <div key={i} className="col-sm-6 col-md-4">
              <Link href={btnUrl}>
                <a>
                  <div className="service_blog">
                    <div className="service_icons">
                      <img width={75} height={75} src={imgUrl} alt="thumbnail" />
                    </div>
                    <div className="full">
                      <h4>{title}</h4>
                    </div>
                    <div className="full">
                      <p>{subtitle}</p>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div >
  )
}

export default Services;