import { studentReducer } from "../student-list-reducer";
import * as c from "../../actions/action-constants";

describe('studentReducer()', () => {
  const mockStudentList = [
    {
      firstName: 'foo',
      lastName: 'bar',
      email: 'foo@foobar.com',
      tags: '"tag1""tag2"'
    },
    {
      firstName: 'right',
      lastName: 'raow',
      email: 'student2@foobar.com',
      tags: '"foo""bar"'
    }
  ];

  it('should return default state', () => {
    const action = {
      type: 'NONE'
    };

    const expectedState = {
      studentList: [],
      filteredStudentList: [],
      searchNameValue: '',
      searchTagValue: ''
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
      searchTagValue: ''
    };

    const result = studentReducer(undefined, action);

    expect(result).toEqual(expectedState);
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

    const expectedStudent = [mockStudentList[0]];


    expect(result.studentList).toEqual(mockStudentList);
    expect(result.filteredStudentList).toEqual(expectedStudent);
  });

  it('should search by tag and return correct filtered student list', () => {
    const action = {
      type: c.SEARCH_TAGS,
      payload: 'tag'
    };

    const state = {
      studentList: mockStudentList,
      filteredStudentList: [],
      searchNameValue: '',
      searchTagValue: ''
    };

    const expectedStudent = [mockStudentList[0]];

    const result = studentReducer(state, action);

    expect(result.filteredStudentList).toEqual(expectedStudent);
  });
});
