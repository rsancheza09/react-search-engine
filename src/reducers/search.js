import * as ACTIONS from '../constants';
import { GOOGLE_SE } from '../constants';

const initialState = {
    searchResults: {
        webPages: [],
        pagination: [],
        totalResults: 0,
    },
    searchEngine: GOOGLE_SE,
};

function search(state = initialState, action) {
    switch (action.type) {
        case ACTIONS.CLEAR_SEARCH_RESULTS:
            return {
                ...state,
                ...initialState,
            };

        case ACTIONS.SET_SEARCH_ENGINE:
            return {
                ...state,
                searchEngine: action.payload,
            };

        case ACTIONS.GET_SEARCH_RESULTS:
            return {
                ...state,
                searchResults: {
                    ...state.searchResults,
                    ...action.payload,
                },
            };

        default:
            return state;
    }
}

export default search;
