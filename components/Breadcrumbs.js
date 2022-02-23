import React, { useMemo, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Breadcrumbs = (props) => {
  const {
    disableOn = ["/", "/#"],
    overrides = { "/#": "/O mnie" },
    disabledBreadcrumbClass = "disabled-breadcrumb-link",
    breadcrumbLinkClass = "breadcrumb-link",
    ovverideLast = "",
  } = props || {};

  const router = useRouter();

  const { asPath = "" } = router;

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
      return splittedUrl.map((el, index) => (
        <React.Fragment key={index}>
          <li
            className={`${breadcrumbLinkClass} ${
              isLastLink(index, splittedUrl) ? disabledBreadcrumbClass : ""
            }`}
          >
            <Link href={`/${setLinkPath(index, splittedUrl)}`}>
              {isLastLink(index, splittedUrl) && ovverideLast
                ? ovverideLast
                : el.replace(/[-]/g, " ")}
            </Link>
          </li>
        </React.Fragment>
      ));
    },
    [breadcrumbLinkClass, disabledBreadcrumbClass, ovverideLast]
  );

  const breadcrumbsParser = useMemo(() => {
    if (Object.keys(overrides).includes(asPath)) {
      const filteredOverrides = Object.entries(overrides).find(
        ([key]) => key === asPath
      );

      if (filteredOverrides[1]) {
        return setLinks(filteredOverrides[1]);
      } else {
        return setLinks(asPath);
      }
    } else {
      return setLinks(asPath);
    }
  }, [setLinks, overrides, asPath]);

  return (
    !disableOn.includes(asPath) && (
      <section
        className="inner-page-banner bg-common inner-page-margin"
        data-bg-image="images/figure/banner.jpg"
        style={{ backgroundImage: 'url("/images/figure/banner.jpg")' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumbs-area">
                <ul>
                  <li>
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>{" "}
                  {breadcrumbsParser}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  );
};

export default Breadcrumbs;
