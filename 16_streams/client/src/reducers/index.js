import { combineReducers } from 'redux';

// Reducers ต้องเป็น pure function รับจาก action creators เท่านั้น

// เอาไว้สร้าง reducers ใน redux store
export default combineReducers({
  // dummy reducers
  replaceMe: () => 'ddd'
});
