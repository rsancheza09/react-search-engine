import { SET_SEARCH_ENGINE, GET_SEARCH_RESULTS, CLEAR_SEARCH_RESULTS, SET_SEARCH_TEXT } from "../constants";
import { clearPaginationOffset } from "./paginationActions";
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
        clearPaginationOffset();
        dispatch({
            type: SET_SEARCH_ENGINE,
            payload: searchEngine
        });
    }
};

export const setSearchText = (searchText) => {
    return (dispatch) => {
        dispatch({
            type: SET_SEARCH_TEXT,
            payload: searchText,
        });
    };
};

export const getSearchResults = ({searchText, offset}) => {
    return (dispatch, getState) => {
        const { searchEngine } = getState().search;
        dispatch({
            type: SET_SEARCH_TEXT,
            payload: searchText
        });
        search({searchText, searchEngine, offset})
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
