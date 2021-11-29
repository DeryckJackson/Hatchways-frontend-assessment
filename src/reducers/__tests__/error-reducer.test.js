import { errorReducer } from "../error-reducer";
import * as c from "../../actions/action-constants";

describe('errorReducer()', () => {
  it('should return msg and status', () => {
    const action = {
      type: c.GET_ERRORS,
      payload: {
        msg: 'Not Found',
        status: 404
      }
    };

    const result = errorReducer(undefined, action);

    expect(result).toEqual(action.payload);
  });
});
