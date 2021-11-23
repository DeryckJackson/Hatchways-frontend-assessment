import * as c from "./action-constants";
import axios from 'axios'

axios.defaults.baseURL = 'https://api.hatchways.io/assessment';

export const getStudents = () => async (dispatch) => {
  try {
    const res = await axios.get("/students");
    console.log("action is working")
    dispatch({
      type: c.GET_STUDENTS,
      payload: res.data.students
    })
    // TODO: Add proper error catching
  } catch (err) {
    console.error(err)
  }
}
