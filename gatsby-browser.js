import React from 'react'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore} from 'redux'
import rootReducer from './src/reducers'
import logger from 'redux-logger'

exports.replaceRouterComponent = ({ history }) => {
  const store = createStore(rootReducer, applyMiddleware(logger))

  const ConnectedRouterWrapper = ({ children }) => (
    <Provider store={store}>
      <Router history={history}>{children}</Router>
    </Provider>
  )

  return ConnectedRouterWrapper
}
