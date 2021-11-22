import { studentReducer } from "../student-list-reducer";

describe('studentReducer()', () => {
  it('should return default state', () => {
    const expectedState = {
      studentList: []
    }
    const state = studentReducer();

    expect(state).toEqual(expectedState)
  });
});
