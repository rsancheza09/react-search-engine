import { SET_SEARCH_ENGINE, GET_SEARCH_RESULTS, CLEAR_SEARCH_RESULTS } from "../constants";
import { search } from '../service';

export const clearSearchResult = () => {
    return dispatch => {
        dispatch({
            type: CLEAR_SEARCH_RESULTS,
        });
    }
};

export const setSearchEngine = (searchEngine) => {
    return dispatch => {
        dispatch({
            type: SET_SEARCH_ENGINE,
            payload: searchEngine
        })
    }
};

export const getSearchResults = (searchText) => {
    return (dispatch, getState) => {
        const { searchEngine } = getState().search;
        search(searchText, searchEngine)
            .then((response) => {
                clearSearchResult();
                dispatch({
                    type: GET_SEARCH_RESULTS,
                    payload: response,
                });
            })
            .catch(error => console.error(`Error in 'getSearchResults' : ${error}`));
    };
};
