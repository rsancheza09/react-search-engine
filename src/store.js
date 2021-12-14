import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createRootReducer from './reducers';

const middleware = [thunk]
const enhancers = [];
const initialState = {};

if (process.env.NODE_ENV === 'development') {
    const { __REDUX_DEVTOOLS_EXTENSION__ } = window;

    if (typeof devToolsExtension === 'function') {
        enhancers.push(__REDUX_DEVTOOLS_EXTENSION__());
    }
}

const componsedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers,
);

const store = createStore(
    createRootReducer,
    initialState,
    componsedEnhancers
);

export default store;
