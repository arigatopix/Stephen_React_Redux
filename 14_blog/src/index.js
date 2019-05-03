import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
import reducers from './reducers';

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>, 
  document.querySelector('#root')
);

/**
 * NOTE : 
 * - import โครงสร้าง redux ใน Index.js ทั้งหมด
  */