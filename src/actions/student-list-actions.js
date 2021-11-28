import * as c from "./action-constants";
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
    dispatch({
      type: c.GET_STUDENTS,
      payload: res.data.students
    });
    // TODO: Add proper error catching
  } catch (err) {
    console.error(err);
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
