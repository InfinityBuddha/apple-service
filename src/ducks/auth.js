import { take, call, all, put } from "redux-saga/effects";
import { signUpAnonymously } from "../api/auth";
import skygear from "skygear";

export const config = skygear.config({
  "endPoint": "https://repairbox.skygeario.com/",
  "apiKey": "391a5c8f42a046adb8e1b6e04464fbdd"
});

export const ANONYMOUS_AUTH_REQ = "ANONYMOUS_AUTH_REQ";
export const ANONYMOUS_AUTH_SUCCESS = "ANONYMOUS_AUTH_SUCCESS";

const initialState = {};

export default function reducer(state = initialState, action) {
  const { type, response } = action;
  switch (type) {
    case ANONYMOUS_AUTH_REQ:
      return {
        ...state
      };

    case ANONYMOUS_AUTH_SUCCESS:
      return {
        ...state
      };

    default:
      return state;
  }
}

export function anonymousAuth() {
  return {
    type: ANONYMOUS_AUTH_REQ
  };
}

export const anonymousAuthSaga = function* () {
  while (true) {
    yield take(ANONYMOUS_AUTH_REQ);
    if (localStorage.getItem("repairBoxID") === null) {
      const { response, error } = yield call(signUpAnonymously);

      if (response) {
        yield put({ type: ANONYMOUS_AUTH_SUCCESS, response });
        localStorage.setItem("repairBoxID", response.ownerID);
      } else {
        console.log(error);
      }
    }
  }
};

export function* saga() {
  yield all([
    anonymousAuthSaga()
  ]);
}