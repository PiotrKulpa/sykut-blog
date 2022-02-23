import React, { useEffect, useState, memo } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { DEFAULT_NUMBER_OF_PAGES } from "../constants";

const Pagination = ({
  path = "",
  totalPages = [],
  btnBlockedClass = "custom-pagination-blocked-btn",
  btnActivClass = "custom-pagination-active-btn ",
  activeClassName = "active",
}) => {
  const [sliceFrom, setSliceFrom] = useState(0);
  const [sliceTo, setSliceTo] = useState(0);
  const router = useRouter();
  const currentPage = Number(router.query.id) || 1;
  const show = DEFAULT_NUMBER_OF_PAGES || 3;

  useEffect(() => {
    if (currentPage >= show) {
      setSliceFrom(currentPage - Math.round(show / 2));
      setSliceTo(currentPage + Math.round(show / 2) - 1);
    } else {
      setSliceFrom(0);
      setSliceTo(show);
    }
  }, [currentPage, show]);

  return (
    <div className="col-12 pagination-layout2 margin-b-30 d-flex justify-content-center">
      <span className={`${currentPage > 1 ? btnActivClass : btnBlockedClass}`}>
        <Link href={`${path}${currentPage - 1}`}>
          <a>{`<< Wstecz`}</a>
        </Link>
      </span>
      <ul>
        {totalPages &&
          totalPages.length > 0 &&
          totalPages.slice(sliceFrom, sliceTo).map((el) => (
            <li key={el} style={{ cursor: "pointer" }}>
              <Link href={`${path}${el}`}>
                <a className={`${currentPage === el ? activeClassName : ""}`}>
                  {el}
                </a>
              </Link>
            </li>
          ))}
      </ul>
      <span
        className={`${
          currentPage < totalPages.length ? btnActivClass : btnBlockedClass
        }`}
      >
        <Link href={`${path}${currentPage + 1}`}>
          <a>{`Dalej >>`}</a>
        </Link>
      </span>
    </div>
  );
};

export default memo(Pagination);