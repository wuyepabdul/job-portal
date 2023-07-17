import {
  JOB_LOAD_FAIL,
  JOB_LOAD_REQUEST,
  JOB_LOAD_SUCCESS,
  SINGLE_JOB_LOAD_FAIL,
  SINGLE_JOB_LOAD_REQUEST,
  SINGLE_JOB_LOAD_SUCCESS,
} from "../constants/jobConstants";
import axios from "axios";

export const jobLoadAction =
  (pageNumber, keyword = "", cat = "", location = "") =>
  async (dispatch) => {
    dispatch({ type: JOB_LOAD_REQUEST });

    try {
      const { data } = await axios.get(
        `/api/jobs/show/?pageNumber=${pageNumber}&keyword=${keyword}&cat=${cat}&location=${location}`
      );
      dispatch({ type: JOB_LOAD_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: JOB_LOAD_FAIL, payload: error.response.data.message });
    }
  };

export const loadSingleJobAction = (id) => async (dispatch) => {
  dispatch({ type: SINGLE_JOB_LOAD_REQUEST });
  try {
    const { data } = await axios.get(`/api/job/${id}`);
    dispatch({ type: SINGLE_JOB_LOAD_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: SINGLE_JOB_LOAD_FAIL,
      payload: error.response.data.message,
    });
  }
};
