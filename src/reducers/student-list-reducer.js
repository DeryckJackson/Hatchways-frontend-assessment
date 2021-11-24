import * as c from "../actions/action-constants";

const initialState = {
  studentList: [],
  filteredStudentList: []
}

export function studentReducer(state = initialState, action) {
  switch (action.type) {
    case c.GET_STUDENTS:
      return {
        ...state,
        studentList: action.payload,
      };
    case c.SEARCH_STUDENTS:
      return {
        ...state,
        filteredStudentList: state.studentList.filter(
          student => student.firstName === action.payload || student.lastName === action.payload
        )
      }
    default:
      return state;
  }
}
