import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { loadJobReducer } from "./reducers/jobReducers";
import { loadJobTypeReducer } from "./reducers/jobTypeReducers";
import { userSigninReducer } from "./reducers/userReducer";

const reducer = combineReducers({
  loadJobs: loadJobReducer,
  loadJobTypes: loadJobTypeReducer,
  signin: userSigninReducer,
});

let initialState = {};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
