import {take, all} from 'redux-saga/effects'

export const ADD_TO_CART = 'ADD_TO_CART'

const initialState = { count: 0 }

export default function reducer(state = initialState, action) {
  const {type} = action
  switch (type) {
    case ADD_TO_CART:
      return {
        ...state
      }

    default:
      return state
  }
}

export function increment() {
  return {
    type: ADD_TO_CART
  }
}

export const testSaga = function* () {
  while (true) {
    yield take(ADD_TO_CART)
    console.log('saga works');
  }
}

export function* saga() {
  yield all([
    testSaga()
  ])
}