import React, { useState, useEffect } from 'react';
import ResultComponent from './ResultComponent';
import ReactPaginate from 'react-paginate';
import Icon from '../Icon';

import '../../styles/results.scss';

const ResultsComponent = () => {
    const results = [{
        id: 1,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue nec leo ultrices ultricies vel scelerisque dui.',
        link: 'https://www.google.com',
        title: 'Google'
    },
    {
        id: 2,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue nec leo ultrices ultricies vel scelerisque dui.',
        link: 'https://www.youtube.com',
        title: 'Youtube'
    },
    {
        id: 3,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue nec leo ultrices ultricies vel scelerisque dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue nec leo ultrices ultricies vel scelerisque dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue nec leo ultrices ultricies vel scelerisque dui.',
        link: 'https://www.facebok.com',
        title: 'Facebook'
    },
    {
        id: 4,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue nec leo ultrices ultricies vel scelerisque dui.',
        link: 'https://www.google.com',
        title: 'Google 4'
    },
    {
        id: 5,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue nec leo ultrices ultricies vel scelerisque dui.',
        link: 'https://www.youtube.com',
        title: 'Youtube 5'
    },
    {
        id: 6,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue nec leo ultrices ultricies vel scelerisque dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue nec leo ultrices ultricies vel scelerisque dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue nec leo ultrices ultricies vel scelerisque dui.',
        link: 'https://www.facebok.com',
        title: 'Facebook 6'
    }];
    const resultsPerPage = 3;
    const [currentResults, setCurrentResults] = useState(results);
    const [pageCount, setPageCount] = useState(0);
    const [resultOffset, setResultOffset] = useState(0);

    useEffect(() => {
        const endOffset = resultOffset + resultsPerPage;
        setCurrentResults(results.slice(resultOffset, endOffset));
        setPageCount(Math.ceil(results.length / resultsPerPage));
    }, [resultOffset, resultsPerPage]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * resultsPerPage) % results.length;
        setResultOffset(newOffset);
    };

    return (
        <div className="results-container">
            {currentResults.map(result => (<ResultComponent key={result.id} resultInfo={result} />))}
            <div className="pagination-container">
                <ReactPaginate
                    breakLabel="..."
                    nextLabel={<Icon icon="faChevronRight"/>}
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel={<Icon icon="faChevronLeft"/>}
                    renderOnZeroPageCount={null}
                    className="pagination"
                    pageClassName="page-item"
                    previousClassName="previous-item"
                    nextClassName="next-item"
                    pageLinkClassName="page-link"
                    previousLinkClassName="page-link"
                    nextLinkClassName="page-link"
                />
            </div>
        </div>
    )
};

export default ResultsComponent;