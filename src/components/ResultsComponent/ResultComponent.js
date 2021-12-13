import React from 'react';
import PropTypes from 'prop-types';

const ResultComponent = ({ resultInfo }) => {
    return (
        <div className="result-container">
            <a href={resultInfo.link} target="_blank" rel="noreferrer">{resultInfo.title}</a>
            <p>{resultInfo.description}</p>
        </div>
    );
};

ResultComponent.propTypes = {
    resultInfo: PropTypes.shape({
        link: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string
    }).isRequired,
};

export default ResultComponent;