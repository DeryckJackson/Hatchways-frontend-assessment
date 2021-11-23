import { combineReducers } from 'redux';
import { studentReducer } from "./student-list-reducer"

const rootReducer = combineReducers({
  studentReducer
})

export default rootReducer;
