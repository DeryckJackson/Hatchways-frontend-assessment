import * as c from "../actions/action-constants";

const initialState = {
  studentList: [],
  filteredStudentList: [],
  searchNameValue: '',
  searchTagValue: new RegExp(`[^"]*[^"]*`, 'gm')
};

export function updateTag(array, student, tag) {
  const updatedArray = array.map(s => {
    if (s.id !== student.id) {
      return s;
    }

    s.tags = `${s.tags}"${tag}"`;
    return s;
  });
  return updatedArray;
}

export function studentReducer(state = initialState, action) {
  switch (action.type) {
    case c.ADD_TAG:
      return {
        ...state,
        studentList: updateTag(state.studentList, action.payload.student, action.payload.tag),
      };
    case c.GET_STUDENTS:
      return {
        ...state,
        studentList: action.payload.map(s => { s.tags = ''; return s; }),
        filteredStudentList: action.payload.map(s => { s.tags = ''; return s; })
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
