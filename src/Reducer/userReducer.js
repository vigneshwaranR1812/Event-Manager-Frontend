import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_LOGIN_FAIL,
  GET_ALL_USER_REQUEST,
  GET_ALL_USER_FAIL,
  GET_ALL_USER_SUCCESS,
  GET_UPLOADER_SUCCESS,
  GET_UPLOADER_REQUEST,
  GET_UPLOADER_FAIL,
  GET_STUDENT_SUCCESS,
  GET_STUDENT_FAIL,
  GET_STUDENT_REQUEST,
} from "../Constant/userConstant";

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};
export const usersAvailableReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_USER_REQUEST || GET_UPLOADER_REQUEST || GET_STUDENT_REQUEST:
      return { loading: true };
    case GET_ALL_USER_SUCCESS:
      return { loading: false, allUser: action.payload };
    case GET_STUDENT_SUCCESS:
      return { loading: false, allStudent: action.payload };
    case GET_UPLOADER_SUCCESS:
      return { loading: false, allUploader: action.payload };
    case GET_ALL_USER_FAIL || GET_STUDENT_FAIL || GET_UPLOADER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
// export const getAllStudentReducer = (state = {}, action) => {
//   switch (action.type) {
//     case GET_STUDENT_REQUEST:
//       return { loading: true };
//     case GET_STUDENT_SUCCESS:
//       return { loading: false, allStudent: action.payload };
//     case GET_STUDENT_FAIL:
//       return { loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };

// export const getAllUploaderReducer = (state = {}, action) => {
//   switch (action.type) {
//     case GET_UPLOADER_REQUEST:
//       return { loading: true };
//     case GET_UPLOADER_SUCCESS:
//       return { loading: false, allUploader: action.payload };
//     case GET_UPLOADER_FAIL:
//       return { loading: false, error: action.payload };
//     case USER_LOGOUT:
//       return {};
//     default:
//       return state;
//   }
// };
