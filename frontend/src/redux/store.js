import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { loadJobReducer, loadSingleJobReducer } from "./reducers/jobReducers";
import { loadJobTypeReducer } from "./reducers/jobTypeReducers";
import {
  allUsersReducer,
  userApplyJobsReducer,
  userLogoutReducer,
  userProfileReducer,
  userSigninReducer,
} from "./reducers/userReducer";
import { themeModeReducer } from "./reducers/themeModeReducers";

const reducer = combineReducers({
  loadJobs: loadJobReducer,
  loadJobTypes: loadJobTypeReducer,
  signin: userSigninReducer,
  logout: userLogoutReducer,
  userProfile: userProfileReducer,
  loadSingleJob: loadSingleJobReducer,
  userApplyJobs: userApplyJobsReducer,
  allUsers: allUsersReducer,
  mode: themeModeReducer,
});

let initialState = {
  signin: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
  mode: "light",
};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
