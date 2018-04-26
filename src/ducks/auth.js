import {take, all} from 'redux-saga/effects'

export const ANONYMOUS_AUTH_REQ = 'ANONYMOUS_AUTH_REQ'

const initialState = { count: 0 }

export default function reducer(state = initialState, action) {
  const {type} = action
  switch (type) {
    case ANONYMOUS_AUTH_REQ:
      return {
        ...state
      }

    default:
      return state
  }
}

export function anonymousAuth() {
  return {
    type: ANONYMOUS_AUTH_REQ
  }
}

export const anonymousAuthSaga = function* () {
  while (true) {
    yield take(ANONYMOUS_AUTH_REQ)
  }
}

export function* saga() {
  yield all([
    anonymousAuthSaga()
  ])
}