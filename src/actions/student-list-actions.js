import * as c from "./action-constants";
import { createMessage, returnErrors } from "./messages";
import axios from 'axios';

axios.defaults.baseURL = 'https://api.hatchways.io/assessment';

export const addTag = (payload) => {
  return {
    type: c.ADD_TAG,
    payload: payload
  };
};

export const getStudents = async (dispatch) => {
  try {
    const res = await axios.get("/students");
    dispatch(createMessage({ getStudents: "Fetched Students" }));
    dispatch({
      type: c.GET_STUDENTS,
      payload: res.data.students
    });
  } catch (err) {
    dispatch(returnErrors(err.response.data, err.response.status));
  }
};

export const searchStudents = (searchInput) => {
  return {
    type: c.SEARCH_STUDENTS,
    payload: searchInput,
  };
};

export const searchTags = (searchInput) => {
  return {
    type: c.SEARCH_TAGS,
    payload: searchInput,
  };
};
