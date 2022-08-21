import { combineReducers } from "redux";
import counterReducers from './counterReducer'

const reducers = combineReducers({
    counterReducers: counterReducers
})

export default reducers