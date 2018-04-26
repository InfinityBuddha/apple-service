import React from 'react'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore} from 'redux'
import rootReducer from './src/reducers'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import saga from './src/redux/saga'

exports.replaceRouterComponent = ({ history }) => {
  const sagaMiddleware = createSagaMiddleware()

  const enhancer = applyMiddleware(sagaMiddleware, logger)

  const store = createStore(rootReducer, enhancer)

  sagaMiddleware.run(saga)

  const ConnectedRouterWrapper = ({ children }) => (
    <Provider store={store}>
      <Router history={history}>{children}</Router>
    </Provider>
  )

  return ConnectedRouterWrapper
}
