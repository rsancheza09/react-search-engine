import React, { useState } from 'react';
import '../../styles/search.scss';
import Select from '../SelectComponent';
import Icon from '../Icon';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { clearSearchResult, setSearchEngine, getSearchResults } from '../../actions/searchActions';
import { GOOGLE_SE, BING_SE } from '../../constants';

const Search = (props) => {
    const { setSearchEngine, getSearchResults, searchEngine } = props;
    const [searchText, setSearchText] = useState('');
    const options = [
        { value: GOOGLE_SE, label: GOOGLE_SE },
        { value: BING_SE, label: BING_SE },
    ];

    const getOptionSelected = (engines) => {
        if (!engines.length) {
            return setSearchEngine(options[0].value);
        }
        let engineValue = engines.map(engine => engine.value);
        engineValue = engineValue.length > 1 ? engineValue.join('/') : engineValue[0];
        return setSearchEngine(engineValue);
    };

    const onInputSearchChange = (event) => {
        setSearchText(event.target.value);
    };

    const handleSubmitClick = () => getSearchResults(searchText)
    return (
        <>
            <div className="search-container">
                <input type="text" className="input-search" placeholder="Search" tab-index="0" value={searchText} onChange={onInputSearchChange} />
            </div>
            <Select
                selectClassName="select-search-engine"
                options={options}
                getOptionSelected={getOptionSelected}
                defaultValue={options.filter(option => option.value === searchEngine)}
            />
            <button className="search-button" onClick={handleSubmitClick}><Icon icon="faSearch" /> Search</button>
        </>
    );
};

const mapStateToProps = state => ({
    searchEngine: state.search.searchEngine,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    clearSearchResult,
    setSearchEngine,
    getSearchResults,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Search);
