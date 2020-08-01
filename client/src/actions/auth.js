import axios from "axios";

import {
  USER_LOADED,
  USER_LOGGEDIN,
  USER_REGISTERED,
  AUTH_ERROR,
} from "./actionTypes";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const register = (formData) => async (dispatch) => {
  try {
    const res = await axios.post("/api/v1/auth/register", formData, config);
    console.log(res.data);
    dispatch({
      USER_REGISTERED,
      payload: res.data.data.token,
    });
  } catch (error) {
    console.error(error);
  }
};

export const login = () => async (dispatch) => {
  try {
    const res = await axios.post("/api/v1/auth/login", formData, config);
    dispatch({
      USER_LOGGEDIN,
      payload: res.data.data.token,
    });
  } catch (error) {
    console.error(error);
  }
};
