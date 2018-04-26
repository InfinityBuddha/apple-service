import store from '../ducks/store'
import auth from '../ducks/auth'
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

const appReducer = combineReducers({
  store: store,
  auth: auth
});

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer