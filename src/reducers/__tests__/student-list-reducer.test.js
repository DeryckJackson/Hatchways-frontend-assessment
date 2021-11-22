import { studentReducer } from "../student-list-reducer";
import * as c from "../../actions/action-constants";

describe('studentReducer()', () => {
  it('should return default state', () => {
    const action = {
      type: 'NONE'
    };

    const expectedState = {
      studentList: []
    };

    const state = studentReducer(expectedState, action);

    expect(state).toEqual(expectedState);
  });

  it('should return student list state', () => {
    const expectedState = [
      {
        name: 'foo',
        email: 'foo@foobar.com'
      },
      {
        name: 'student2',
        email: 'student2@foobar.com'
      }
    ];

    const action = {
      type: c.GET_STUDENTS,
      payload: expectedState
    };

    const state = studentReducer(action);

    expect(state).toEqual(expectedState);
  });
});
