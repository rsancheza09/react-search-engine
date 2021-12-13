import { combineReducers } from "redux"

const reducers = (history) => combineReducers({
    router: connectRouter(history)
})

export default reducers