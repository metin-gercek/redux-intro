import { combineReducers } from "redux";
import counterReducers from './counterReducer'

const reducer = combineReducers({
    counterReducers:counterReducers
})

export default reducer