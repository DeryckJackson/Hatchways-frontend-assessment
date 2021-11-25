import { studentReducer } from "../student-list-reducer";
import * as c from "../../actions/action-constants";

describe('studentReducer()', () => {
  const mockStudentList = [
    {
      firstName: 'foo',
      lastName: 'bar',
      email: 'foo@foobar.com'
    },
    {
      firstName: 'student',
      lastName: 'raow',
      email: 'student2@foobar.com'
    }
  ];

  it('should return default state', () => {
    const action = {
      type: 'NONE'
    };

    const expectedState = {
      studentList: [],
      filteredStudentList: []
    };

    const result = studentReducer(undefined, action);

    expect(result).toEqual(expectedState);
  });

  it('should return student list state', () => {
    const action = {
      type: c.GET_STUDENTS,
      payload: mockStudentList
    };

    const result = studentReducer(null, action);

    expect(result).toEqual({ studentList: mockStudentList, filteredStudentList: mockStudentList });
  });

  it('should return correct filtered student list', () => {
    const action = {
      type: c.SEARCH_STUDENTS,
      payload: "foo"
    };

    const state = {
      studentList: mockStudentList,
      filteredStudentList: []
    };

    const result = studentReducer(state, action);

    const expectedStudent = [
      {
        firstName: 'foo',
        lastName: 'bar',
        email: 'foo@foobar.com'
      }
    ];

    expect(result.studentList).toEqual(mockStudentList);
    expect(result.filteredStudentList).toEqual(expectedStudent);
  });
});
