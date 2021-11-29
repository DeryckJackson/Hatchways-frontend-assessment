import { messagesReducer } from "../messages-reducer";
import * as c from "../../actions/action-constants";

describe('errorReducer()', () => {
  it('should return msg', () => {
    const action = {
      type: c.CREATE_MESSAGE,
      payload: {
        msg: 'FOOBAR'
      }
    };

    const result = messagesReducer(undefined, action);

    expect(result).toEqual(action.payload);
  });
});
