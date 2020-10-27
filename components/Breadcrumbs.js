import React, { useMemo, useCallback } from "react";
import Link from "next/link";
import { useRouter } from 'next/router';

const Breadcrumbs = (props) => {
  const {
    overrides = {},
    separator = ">",
    disabledBreadcrumbClass = "disabled-breadcrumb-link",
    breadcrumbLinkClass = "breadcrumb-link"
  } = props || {};

  const router = useRouter();

  const { pathname = '' } = router;

  console.log(pathname);
  const isLastLink = (index, splittedUrl) => index === splittedUrl.length - 1;
  const setLinkPath = (index, splittedUrl) => {
    return splittedUrl
      .slice(0, index + 1)
      .toString()
      .replace(/,/g, "/");
  };
  const setLinks = useCallback(
    (data) => {
      const splittedUrl = data && data.split("/").slice(1, data.length);
      console.log(splittedUrl);
      return splittedUrl.map((el, index) => (
        <React.Fragment key={index}>
          {/* <span> {separator} </span> */}
          <li>
            <Link
              href={`/${setLinkPath(index, splittedUrl)}`}
              className={`${breadcrumbLinkClass} ${isLastLink(index, splittedUrl) ? disabledBreadcrumbClass : ""
                }`}
            >
              {el}
            </Link>
          </li>
        </React.Fragment>
      ));
    },
    [separator, disabledBreadcrumbClass, breadcrumbLinkClass]
  );

  const breadcrumbsParser = useMemo(() => {
    if (Object.keys(overrides).includes(pathname)) {
      const filteredOverrides = Object.entries(overrides).find(
        ([key]) => key === pathname
      );

      if (filteredOverrides[1]) {
        return setLinks(filteredOverrides[1]);
      } else {
        return setLinks(pathname);
      }
    } else {
      return setLinks(pathname);
    }
  }, [setLinks, overrides]);

  return (

    <section
      className="inner-page-banner bg-common inner-page-margin"
      data-bg-image="img/figure/banner.jpg"
      style={{ backgroundImage: 'url("images/figure/banner.jpg")' }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="breadcrumbs-area">
              <ul>
                <li><Link href="/"><a>Home</a></Link></li> {breadcrumbsParser}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumbs;
