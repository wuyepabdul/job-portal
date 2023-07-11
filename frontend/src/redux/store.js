import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { loadJobReducer } from "./reducers/jobReducers";
import { loadJobTypeReducer } from "./reducers/jobTypeReducers";

const reducer = combineReducers({
  loadJobs: loadJobReducer,
  jobTypes: loadJobTypeReducer,
});

let initialState = {};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
