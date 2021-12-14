import * as ACTIONS from '../constants';

const initialState = {
    offset: 0,
};

function pagination(state = initialState, action) {
    switch (action.type) {
        case ACTIONS.CLEAR_PAGINATION_OFFSET:
            return {
                ...state,
                offset: initialState.offset,
            };

        case ACTIONS.SET_PAGINATION_OFFSET:
            return {
                ...state,
                offset: action.payload,
            };
        default:
            return state;
    }
}

export default pagination;
