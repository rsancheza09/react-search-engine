import {CLEAR_PAGINATION_OFFSET, SET_PAGINATION_OFFSET} from '../constants'

export const clearPaginationOffset = () => {
    return dispatch => {
        dispatch({
            type: CLEAR_PAGINATION_OFFSET,
        });
    }
};

export const setPaginationOffset = (offset) => {
    return dispatch => {
        dispatch({
            type: SET_PAGINATION_OFFSET,
            payload: offset,
        })
    }
};
