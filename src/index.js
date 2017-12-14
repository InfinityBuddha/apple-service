import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render((
  <BrowserRouter path={process.env.PUBLIC_URL + '/'}>
    <App />
  </BrowserRouter>
), document.getElementById('root'))
