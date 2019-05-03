import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import App from './components/App';
import reducers from './reducers';

// Init redux thunk
const store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.querySelector('#root')
);

/**
 * NOTE : 
 * - import โครงสร้าง redux ใน Index.js ทั้งหมด
 *    - createStore(reducers) คือเก็บ state ไว้ใน Store ของ Redux
 *    - Provider เป็น component ติดต่อ React-Redux 
 * ------
 * Middleware
 * - applyMiddleware มาจาก redux
 * - thunk เป็น library ให้ redux ใช้ middleware
  */