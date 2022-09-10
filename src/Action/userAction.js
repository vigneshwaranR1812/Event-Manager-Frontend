import axios from "axios";
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  GET_ALL_USER_REQUEST,
  GET_ALL_USER_FAIL,
  GET_ALL_USER_SUCCESS,
  GET_UPLOADER_SUCCESS,
  GET_UPLOADER_REQUEST,
  GET_UPLOADER_FAIL,
  GET_STUDENT_SUCCESS,
  GET_STUDENT_FAIL,
  GET_STUDENT_REQUEST,
  USER_LOGIN_FAIL,
} from "../Constant/userConstant";

export const login = (email, password) => async (dispatch) => {
  try {
    // console.log(email, password);
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "http://localhost:4000/api/user/login",
      { email, password },
      config
    );

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getAllUser = () => async (dispatch, getState) => {
  try {
    // console.log(email, password);

    dispatch({
      type: GET_ALL_USER_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();
    console.log(userInfo.token);
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get("http://localhost:4000/api/user", config);

    dispatch({
      type: GET_ALL_USER_SUCCESS,
      payload: data,
    });

    localStorage.setItem("allUser", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: GET_ALL_USER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const getAllUploader = () => async (dispatch, getState) => {
  try {
    // console.log(email, password);
    dispatch({
      type: GET_UPLOADER_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(
      "http://localhost:4000/api/user/uploader",
      config
    );

    dispatch({
      type: GET_UPLOADER_SUCCESS,
      payload: data,
    });

    localStorage.setItem("allUploader", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: GET_UPLOADER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getAllStudent = () => async (dispatch, getState) => {
  try {
    // console.log(email, password);
    dispatch({
      type: GET_STUDENT_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(
      "http://localhost:4000/api/user/students",
      config
    );

    dispatch({
      type: GET_STUDENT_SUCCESS,
      payload: data,
    });

    localStorage.setItem("allStudents", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: GET_STUDENT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
