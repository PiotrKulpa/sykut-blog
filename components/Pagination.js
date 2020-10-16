import React, { useEffect, useState, memo } from 'react';
import { useRouter } from 'next/router';


const Pagination = (props) => {

    const {
        data = [],
        perPage = 1,
        path = '',
        cursorStyle = 'not-allowed',
        activeClassName = 'active',
        show = 3,
    } = props;

    const [pages, setPages] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [sliceFrom, setSliceFrom] = useState(0);
    const [sliceTo, setSliceTo] = useState(0);
    const router = useRouter();

    useEffect(() => {
        if (data.length > 0) {
            const numOfPages = Math.ceil(data.length / perPage);
            const pagesData = [];
            for (let x = 0; x < numOfPages; x++) {
                pagesData.push({ index: x, page: x + 1 })
            }
            setPages(pagesData);
        }

    }, [data, perPage]);

    useEffect(() => {
        const sessionCounter = Number(window.sessionStorage.getItem("sessionCounter")) || 1;
        router.push(`/${path}?strona=${sessionCounter}`);
        setCurrentPage(sessionCounter);
    }, []);

    const currentPageEvent = (page) => {
        router.push(`/${path}?strona=${page}`, undefined, { shallow: true });
        window.sessionStorage.setItem("sessionCounter", page);
        setCurrentPage(page);
    };

    const next = () => {  
        if(currentPage < data.length) {
            const sessionCounter = Number(window.sessionStorage.getItem("sessionCounter")) || 1;
            router.push(`/${path}?strona=${sessionCounter + 1}`);
            setCurrentPage(sessionCounter + 1);
            window.sessionStorage.setItem("sessionCounter", sessionCounter + 1);
        }
    };

    const back = () => {
        if(currentPage > 1) {
            const sessionCounter = Number(window.sessionStorage.getItem("sessionCounter")) || 1;
            router.push(`/${path}?strona=${sessionCounter - 1}`);
            setCurrentPage(sessionCounter - 1);
            window.sessionStorage.setItem("sessionCounter", sessionCounter - 1);
        }
    };

    useEffect(() => {
        if (currentPage >= show) {
            setSliceFrom(currentPage - Math.round(show / 2));
            setSliceTo(currentPage + Math.round(show / 2) - 1);
        }
        else {
            setSliceFrom(0);
            setSliceTo(show);
        }
    }, [currentPage, show])

    return (

        <div className="pagination-layout2 margin-b-30 d-flex justify-content-center">
            <span
                onClick={back}
                style={{ cursor: currentPage > 1 ? 'pointer' : cursorStyle, margin: '10px'}}
            >
                {`<< Wstecz`}
            </span>
            <ul >
            {pages && pages.length > 0
                && pages.slice(sliceFrom, sliceTo).map(({ index, page }) =>
                    <li
                        key={index}
                        onClick={() => currentPageEvent(page)}
                        style={{ cursor: 'pointer' }}
                    >
                        <a className={`${currentPage === page  ? activeClassName : ''}`}>{page}</a>
                    </li>)}
            </ul>
            <span
                onClick={next}
                style={{ cursor: currentPage < data.length ? 'pointer' : cursorStyle, margin: '10px' }}
            >
                {`Dalej >>`}
            </span>
        </div>


    )
}

export default memo(Pagination);

