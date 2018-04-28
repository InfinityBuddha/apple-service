import {take, all, call} from 'redux-saga/effects'
import { addToCartAPI, getCatalogAPI } from "../api/auth";

export const ADD_TO_CART = 'ADD_TO_CART'
export const GET_CATALOG_REQ = 'GET_CATALOG_REQ'

const initialState = { }

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

export function addToCart(name, price, brand, category) {
  return {
    type: ADD_TO_CART,
    payload: {name, price, brand, category}
  }
}

export function getCatalog() {
  return {
    type: GET_CATALOG_REQ
  }
}

export const getCatalogSaga = function* () {
  while (true) {
    yield take(GET_CATALOG_REQ)

    const {response, error} = yield call(getCatalogAPI)

    if (response) {
      console.log(response);
    } else {
      console.log(error);
    }
  }
}

export const addToCartSaga = function* () {
  while (true) {
    const action = yield take(ADD_TO_CART)
    const {name, price, brand, category} = action.payload
    const params = {
      name, price, brand, category
    }
    const {response, error} = yield call(addToCartAPI, params)

    if (response) {
      console.log(response);
    } else {
      console.log(error);
    }
  }
}

export function* saga() {
  yield all([
    addToCartSaga(),
    getCatalogSaga()
  ])
}