import { studentReducer } from "../student-list-reducer";

describe('studentReducer()', () => {
  it('should return default state', () => {
    const action = {
      type: 'NONE'
    }
    const expectedState = {
      studentList: []
    }
    const state = studentReducer(expectedState, action);

    expect(state).toEqual(expectedState)
  });
});
