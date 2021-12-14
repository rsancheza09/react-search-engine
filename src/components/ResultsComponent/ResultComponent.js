import React from 'react';
import PropTypes from 'prop-types';

const Result = ({ resultInfo }) => {
    return (
        <div className="result-container">
            <a href={resultInfo.url} target="_blank" rel="noreferrer">{resultInfo.title}</a>
            <p>{resultInfo.snippet}</p>
        </div>
    );
};

Result.propTypes = {
    resultInfo: PropTypes.shape({
        url: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string
    }).isRequired,
};

export default Result;