import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { loadJobReducer } from "./reducers/jobReducers";
import { loadJobTypeReducer } from "./reducers/jobTypeReducers";
import {
  userLogoutReducer,
  userProfileReducer,
  userSigninReducer,
} from "./reducers/userReducer";

const reducer = combineReducers({
  loadJobs: loadJobReducer,
  loadJobTypes: loadJobTypeReducer,
  signin: userSigninReducer,
  logout: userLogoutReducer,
  userProfile: userProfileReducer,
});

let initialState = {
  signin: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
