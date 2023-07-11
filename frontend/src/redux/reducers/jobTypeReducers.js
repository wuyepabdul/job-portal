import {
  JOB_TYPE_LOAD_FAIL,
  JOB_TYPE_LOAD_REQUEST,
  JOB_TYPE_LOAD_RESET,
  JOB_TYPE_LOAD_SUCCESS,
} from "../constants/jobTypeConstants";

export const loadJobTypeReducer = (state = { jobTypes: [] }, action) => {
  switch (action.type) {
    case JOB_TYPE_LOAD_REQUEST:
      return { loading: true };
    case JOB_TYPE_LOAD_SUCCESS:
      return { loading: false, jobTypes: action.payload.jobTypes };
    case JOB_TYPE_LOAD_FAIL:
      return { loading: false, error: action.payload };
    case JOB_TYPE_LOAD_RESET:
      return {};
    default:
      return state;
  }
};
