import {
  JOB_LOAD_FAIL,
  JOB_LOAD_REQUEST,
  JOB_LOAD_RESET,
  JOB_LOAD_SUCCESS,
  SINGLE_JOB_LOAD_FAIL,
  SINGLE_JOB_LOAD_REQUEST,
  SINGLE_JOB_LOAD_RESET,
  SINGLE_JOB_LOAD_SUCCESS,
} from "../constants/jobConstants";

export const loadJobReducer = (state = { jobs: [] }, action) => {
  switch (action.type) {
    case JOB_LOAD_REQUEST:
      return { loading: true };
    case JOB_LOAD_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        page: action.payload.page,
        pages: action.payload.pages,
        count: action.payload.count,
        setUniqueLocation: action.payload.setUniqueLocation,
        jobs: action.payload.jobs,
      };
    case JOB_LOAD_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case JOB_LOAD_RESET:
      return {};
    default:
      return state;
  }
};

export const loadSingleJobReducer = (state = { singleJob: {} }, action) => {
  switch (action.type) {
    case SINGLE_JOB_LOAD_REQUEST:
      return { loading: true };
    case SINGLE_JOB_LOAD_SUCCESS:
      return {
        loading: false,
        success: true,
        singleJob: action.payload.singleJob,
      };
    case SINGLE_JOB_LOAD_FAIL:
      return { loading: false, error: action.payload };
    case SINGLE_JOB_LOAD_RESET:
      return {};
    default:
      return state;
  }
};
