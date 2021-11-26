import * as c from "../actions/action-constants";

const initialState = {
  studentList: [],
  filteredStudentList: [],
  searchNameValue: '',
  searchTagValue: new RegExp(`[^"]*[^"]*`, 'gm')
};

export function studentReducer(state = initialState, action) {
  switch (action.type) {
    case c.GET_STUDENTS:
      return {
        ...state,
        studentList: action.payload,
        filteredStudentList: action.payload
      };
    case c.SEARCH_STUDENTS:
      state.searchNameValue = action.payload;
      return {
        ...state,
        filteredStudentList: state.studentList.filter(
          student => (
            student.firstName.toLowerCase().includes(state.searchNameValue) ||
            student.lastName.toLowerCase().includes(state.searchNameValue)) &&
            state.searchTagValue.test(student.tags)
        )
      };
    case c.SEARCH_TAGS:
      state.searchTagValue = new RegExp(`[^"]*${action.payload}[^"]*`, 'gm');
      return {
        ...state,
        filteredStudentList: state.studentList.filter(
          student => (
            student.firstName.toLowerCase().includes(state.searchNameValue) ||
            student.lastName.toLowerCase().includes(state.searchNameValue)) &&
            state.searchTagValue.test(student.tags)
        )
      };
    default:
      return state;
  }
}
