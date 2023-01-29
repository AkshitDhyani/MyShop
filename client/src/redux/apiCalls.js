import {
  userLoginFailure,
  userLoginStart,
  userLoginSuccess,
} from "./userRedux";
import axios from "axios";
import Port from "../Strings";

export const loginAPI = async (dispatch, user) => {
  try {
    console.log(user);
    const res = await axios.post(
      `http://localhost:${Port()}/api/auth/login`,
      user
    );
    dispatch(userLoginSuccess(res.data));
    console.log(res.data);
  } catch (err) {
    dispatch(userLoginFailure());
  }
};

export const registerAPI = async (dispatch, user) => {
  try {
    console.log(user);
    const res = await axios.post(
      `http://localhost:${Port()}/api/auth/register`,
      user
    );
    dispatch(userLoginSuccess(res.data));
    console.log(res.data);
  } catch (err) {
    dispatch(userLoginFailure());
  }
};
