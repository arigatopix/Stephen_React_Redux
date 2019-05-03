import { combineReducers } from 'redux';


export default combineReducers({
  replaceMe : () => 'hi there'
  
});
// * export combineReducers เพื่อเอาไปใช้งานต่อใน index.js
// * บางทียังไม่ได้คิดว่า reducers คืออะไรให้ใช้ dummyKey : () => 'dummyValue' แทน