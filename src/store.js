import { createBrowserHistory } from 'history'
import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'

import createRootReducer from './reducers'

export const history = createBrowserHistory()

const initialState = {}

const middlewares = [
    thunk,
    routerMiddleware(history)
]

const composeEnhancers = compose(
    applyMiddleware(...middlewares),
    []
)

const store = createStore(
    createRootReducer(history),
    initialState,
    composeEnhancers
)

export default store
