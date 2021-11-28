import { addTag, getStudents, searchStudents, searchTags } from "../student-list-actions";
import * as c from "../action-constants";
import * as axios from 'axios';

jest.mock('axios');

describe('addTags', () => {
  it('should return correct type and payload', () => {
    const payload = {
      id: 1,
      tag: 'foo'
    };

    const expectedPayload = {
      type: c.ADD_TAG,
      payload: payload
    };

    const result = addTag(payload);

    expect(result).toEqual(expectedPayload);
  });

});

describe('getStudents()', () => {
  const mockDispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should call axios.get and dispatch return data', async () => {
    const mockData = '12345';

    const expectedDispatchObj = {
      type: c.GET_STUDENTS,
      payload: mockData
    };

    axios.get.mockResolvedValue({ data: { students: mockData } });

    await getStudents(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(expectedDispatchObj);
  });
});

describe('searchStudents()', () => {
  it('should return correct type and payload', () => {
    const searchInput = "Bob";
    const expectedPayload = {
      type: c.SEARCH_STUDENTS,
      payload: searchInput
    };

    const result = searchStudents(searchInput);

    expect(result).toEqual(expectedPayload);
  });
});

describe('searchTags()', () => {
  it('should return correct type and payload', () => {
    const searchInput = "tag";
    const expectedPayload = {
      type: c.SEARCH_TAGS,
      payload: searchInput
    };

    const result = searchTags(searchInput);

    expect(result).toEqual(expectedPayload);
  });
});
