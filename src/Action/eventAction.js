import {
  EVENT_DETAILS_REQUEST,
  EVENT_DETAILS_SUCCESS,
  EVENT_DETAILS_FAIL,
} from "../Constant/eventConstant.js";
import axios from "axios";

export const getAllEvents = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: EVENT_DETAILS_REQUEST,
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
      "http://localhost:4000/api/event/",
      config
    );

    dispatch({
      type: EVENT_DETAILS_SUCCESS,
      payload: data,
    });

    localStorage.setItem("eventInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({ type: EVENT_DETAILS_FAIL });
  }
};
