import axios from "axios";
import { toast } from "react-toastify";
import {
  USER_LOGOUT_FAIL,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
} from "../constants/userConstants";

export const userSigninAction = (user) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST });
  try {
    const { data } = await axios.post("/api/signin", user);
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    toast.success("Login Successful");
  } catch (error) {
    dispatch({ type: USER_SIGNIN_FAIL, payload: error.response.data.message });
    toast.error(error.response.data.message);
  }
};

export const userLogoutAction = () => async (dispatch) => {
  dispatch({ type: USER_LOGOUT_REQUEST });

  try {
    const { data } = await axios.get("/api/logout");
    dispatch({ type: USER_LOGOUT_SUCCESS, payload: data });
    toast.success("Logout Successfull");
    localStorage.removeItem("userInfo");
  } catch (error) {
    dispatch({ type: USER_LOGOUT_FAIL, payload: error.response.data.message });
    toast.error("Logout Fail");
  }
};
