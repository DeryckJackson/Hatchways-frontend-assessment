import { createMessage, returnErrors } from "../messages";
import * as c from "../action-constants";

describe('createMessage()', () => {
  it('should return correct type and payload', () => {
    const payload = {
      msg: 'foobar'
    };

    const expectedPayload = {
      type: c.CREATE_MESSAGE,
      payload: payload
    };

    const result = createMessage(payload);

    expect(result).toEqual(expectedPayload);
  });
});

describe('returnErrors()', () => {
  it('should return correct type and payload', () => {
    const payload = {
      msg: 'Not found',
      status: 404
    };

    const expectedPayload = {
      type: c.GET_ERRORS,
      payload: payload
    };

    const result = returnErrors(payload.msg, payload.status);

    expect(result).toEqual(expectedPayload);
  });
});
