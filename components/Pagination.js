import React, { useEffect, useState, memo } from 'react';
import { useRouter } from 'next/router';


const Pagination = (props) => {

    const { 
        data = [], 
        perPage = 10,
        path = '',
        cursorStyle ='not-allowed',
        activeClassName ='page-active',
        show = 5,
    } = props;

    const[pages, setPages] = useState([]);
    const[currentPage, setCurrentPage] = useState(1);
    const[sliceFrom, setSliceFrom] = useState(0);
    const[sliceTo, setSliceTo] = useState(0);
    const router = useRouter();

    useEffect(() => {
        if(data.length > 0) {
            const numOfPages =  Math.ceil(data.length / perPage);
            const pagesData = [];
            for(let x = 0; x < numOfPages; x++) { 
                pagesData.push({index: x, page: x + 1})
            }
            setPages(pagesData);
        }
        
    }, [data, perPage]);

    useEffect(() => {
        router.push(`/${path}?page=${currentPage}&perpage=${perPage}`);
    }, [currentPage, router, path, perPage]);
    
    const currentPageEvent = (page) => {
        setCurrentPage(page);
    };

    const next = () => {
        currentPage < pages.length && setCurrentPage((prev) => prev + 1);
        
    };

    const back = () => {
        currentPage > 1 && setCurrentPage((prev) => prev - 1);
    };

    useEffect(() => {
        if(currentPage >= show) {
            setSliceFrom(currentPage - Math.round(show / 2));
            setSliceTo(currentPage + Math.round(show / 2) - 1);
        }
        else {
            setSliceFrom(0);
            setSliceTo(show);
        }
    }, [currentPage, show])

    return (
        
            <div>
                <span 
                    onClick={back}
                    style={{cursor: currentPage > 1 ? 'pointer' : cursorStyle}}
                >
                    {`<<Back`}
                </span>
                {pages && pages.length > 0 
                    && pages.slice(sliceFrom, sliceTo).map(({index, page}) => 
                    <span 
                        key={index} 
                        onClick={() => currentPageEvent(page)}
                        className={currentPage === page ? activeClassName : ''}
                        style={{cursor: 'pointer'}}
                    >
                        {page}
                    </span>)}
                <span 
                    onClick={next}
                    style={{cursor: currentPage < pages.length ? 'pointer' : cursorStyle}}
                >
                    {`Next >>`}
                </span>
            </div>
       
    )
}

export default memo(Pagination);