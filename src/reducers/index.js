import { combineReducers } from 'redux';
import { studentReducer } from "./student-list-reducer";
import { errorReducer } from './error-reducer';
import { messagesReducer } from './messages-reducer';

const rootReducer = combineReducers({
  studentReducer,
  messagesReducer,
  errorReducer
});

export default rootReducer;
