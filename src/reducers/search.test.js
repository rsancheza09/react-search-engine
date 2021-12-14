
import { BING_SE, GOOGLE_SE, CLEAR_SEARCH_RESULTS, SET_SEARCH_ENGINE, GET_SEARCH_RESULTS } from '../constants';
import searchReducer from './search';

const initialState = {
    searchResults: {
        webPages: [],
        pagination: [],
        totalResults: 0,
    },
    searchEngine: GOOGLE_SE,
};

test('Search Reducer - return initial state', () => {
    expect(searchReducer(initialState, {})).toEqual(initialState);
});

test('Search Reducer - CLEAR_SEARCH_RESULTS action', () => {
    const prevState = {
        ...initialState,
        searchResults: {
            webPages: [1, 2, 3],
            pagination: [1, 2, 3],
            totalResults: 100
        },
        searchEngine: GOOGLE_SE,
    };
    expect(searchReducer(prevState, { type: CLEAR_SEARCH_RESULTS })).toEqual(initialState);
});

test('Search Reducer - SET_SEARCH_ENGINE action', () => {
    const payload = BING_SE;
    expect(searchReducer(initialState, { type: SET_SEARCH_ENGINE, payload })).toEqual({
        ...initialState,
        searchEngine: BING_SE
    });
});

test('Search Reducer - GET_SEARCH_RESULTS action', () => {
    const payload = {
        webPages: [1, 2, 3],
        pagination: [1, 2, 3],
        totalResults: 100
    };
    expect(searchReducer(initialState, { type: GET_SEARCH_RESULTS, payload })).toEqual({
        ...initialState,
        searchResults: payload
    });
});

