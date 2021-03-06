import React, { useState, useEffect } from 'react';
import ResultComponent from './ResultComponent';
import ReactPaginate from 'react-paginate';
import Icon from '../Icon';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setPaginationOffset } from '../../actions/paginationActions';
import { getSearchResults } from '../../actions/searchActions';

import '../../styles/results.scss';

const Results = (props) => {
    const { searchResults, pagination } = props;

    const [pageCount, setPageCount] = useState(0);

    useEffect(() => {
        setPageCount(Math.ceil(searchResults.totalResults / 10));
    }, [searchResults, pagination]);

    const handlePageClick = (event) => {
        const { selected } = event;
        const {setPaginationOffset, getSearchResults, searchText } = props;
        const itemsPerPage = 10;
        const offset = selected * itemsPerPage + 1;
        setPaginationOffset(offset);
        getSearchResults({searchText, offset })

    };
    return (
        <div className="results-container">
            <div className="web-results">
                {searchResults.webPages.length ?
                    searchResults.webPages.map(result => (<ResultComponent key={result.position ? result.position : result.id} resultInfo={result} />))
                    : ''
                }

                <div className="pagination-container">
                    {/* TODO: Pagination is not working yet */}
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel={<Icon icon="faChevronRight"/>}
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={2}
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
        </div>
    );
};

const mapStateToProps = state => ({
    searchResults: state.search.searchResults,
    pagination: state.pagination,
    searchText: state.search.searchText,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    setPaginationOffset,
    getSearchResults,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Results);