import { studentReducer } from "../student-list-reducer";
import * as c from "../../actions/action-constants";

describe('studentReducer()', () => {
  const mockStudentList = [
    {
      id: 1,
      firstName: 'foo',
      lastName: 'bar',
      email: 'foo@foobar.com',
      tags: '"tag1""tag2"'
    },
    {
      id: 2,
      firstName: 'right',
      lastName: 'raow',
      email: 'student2@foobar.com',
      tags: '"foo""bar"'
    }
  ];

  const defaultState = {
    studentList: mockStudentList,
    filteredStudentList: [],
    searchNameValue: '',
    searchTagValue: new RegExp(`[^"]*[^"]*`, 'gm')
  };

  it('should return default state', () => {
    const action = {
      type: 'NONE'
    };

    const expectedState = {
      studentList: [],
      filteredStudentList: [],
      searchNameValue: '',
      searchTagValue: new RegExp(`[^"]*[^"]*`, 'gm')
    };

    const result = studentReducer(undefined, action);

    expect(result).toEqual(expectedState);
  });

  it('should return student list state', () => {
    const action = {
      type: c.GET_STUDENTS,
      payload: mockStudentList
    };

    const expectedState = {
      studentList: mockStudentList,
      filteredStudentList: mockStudentList,
      searchNameValue: '',
      searchTagValue: new RegExp(`[^"]*[^"]*`, 'gm')
    };

    const result = studentReducer(undefined, action);

    expect(result).toEqual(expectedState);
  });

  it('should return correct filtered student list', () => {
    const action = {
      type: c.SEARCH_STUDENTS,
      payload: "foo"
    };

    const result = studentReducer(defaultState, action);

    const expectedStudent = [mockStudentList[0]];


    expect(result.studentList).toEqual(mockStudentList);
    expect(result.filteredStudentList).toEqual(expectedStudent);
  });

  it('should search by tag and return correct filtered student list', () => {
    const action = {
      type: c.SEARCH_TAGS,
      payload: 'tag'
    };

    const expectedStudent = [mockStudentList[0]];

    const result = studentReducer(defaultState, action);

    expect(result.filteredStudentList).toEqual(expectedStudent);
  });

  it('should add tag to selected student', () => {
    const action = {
      type: c.ADD_TAG,
      payload: {
        id: 1,
        tag: 'added tag'
      }
    };

    const expectedStudent = {
      ...mockStudentList[0],
      tags: `${mockStudentList[0].tags}"${action.payload.tag}"`
    };

    const expectedState = {
      ...defaultState,
      studentList: [expectedStudent, mockStudentList[1]]
    };

    const result = studentReducer(defaultState, action);

    expect(result).toEqual(expectedState);
  });
});
