import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userLoginReducer } from "Reducer/userReducer";
import { eventDetailsReducer } from "Reducer/eventReducer";
import {
  getAllStudentReducer,
  getAllUserReducer,
  getAllUploaderReducer,
} from "Reducer/userReducer";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  eventDetails: eventDetailsReducer,
  allUser: getAllStudentReducer,
  allStudent: getAllUserReducer,
  allUploader: getAllUploaderReducer,
});
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
const userEventFromStorage = localStorage.getItem("eventInfo")
  ? JSON.parse(localStorage.getItem("eventInfo"))
  : null;
const allUserFromStorage = localStorage.getItem("allUser")
  ? JSON.parse(localStorage.getItem("allUser"))
  : null;
const allUploaderFromStorage = localStorage.getItem("allUploader")
  ? JSON.parse(localStorage.getItem("allUploader"))
  : null;
const allStudentFromStorage = localStorage.getItem("allStudent")
  ? JSON.parse(localStorage.getItem("allStudent"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
  eventDetails: { eventInfo: userEventFromStorage },
  allUser: allUserFromStorage,
  allStudent: allStudentFromStorage,
  allUploader: allUploaderFromStorage,
};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
