import * as c from "../actions/action-constants";

const initialState = {
  studentList: []
}

export function studentReducer(state = initialState, action) {
  switch (action.type) {
    case c.GET_STUDENTS:
      return {
        ...state,
        studentList: action.payload,
      };
    default:
      return state;
  }
}
