import { getStudents } from "../student-list-actions";
import * as c from "../action-constants";
import * as axios from 'axios'

jest.mock('axios')

describe('getStudents()', () => {
  const mockDispatch = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should call axios.get and dispatch return data', async () => {
    const mockData = {
      data: '12345'
    };

    axios.get.mockImplementation({ data: mockData });

    const expectedDispatchObj = {
      type: c.GET_STUDENTS,
      payload: mockData.data,
    };

    await getStudents()(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(expectedDispatchObj);
  });
});
