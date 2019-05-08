import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import App from './components/App';
import reducers from './reducers';

// Init redux thunk
const store = createStore(reducers, applyMiddleware(thunk));
// reducers คือสร้าง state ใน store 
// applyMiddleware(thunk) ใช้ thunk เพราะว่า fetch data และ async await โดยเป็น option return function หรือ action
// Propvider เป็นของ react-redux เพื่อ getState

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.querySelector('#root')
);
