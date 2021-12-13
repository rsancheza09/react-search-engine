import React from 'react';
import '../../styles/search.scss';
import SelectComponent from '../SelectComponent';
import Icon from '../Icon';

const SearchComponent = () => {
    const options = [
        { value: 'Google', label: 'Google' },
        { value: 'Bing', label: 'Bing' },
    ];

    const setSearchEngine = (searchEngine) => {
        console.log('searchEngine', searchEngine);
    };
    return (
        <>
            <div className="search-container">
                <input type="text" className="input-search" placeholder="Search" tab-index="0" />
            </div>
            <SelectComponent selectClassName="select-search-engine" options={options} getOptionSelected={setSearchEngine} />
            <button className="search-button"><Icon icon="faSearch" /> Search</button>
        </>
    );
};

export default SearchComponent;