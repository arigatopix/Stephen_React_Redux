import { combineReducers } from 'redux';
import authReducer from './authReducer';

// เอาไว้สร้าง reducers ใน redux store
export default combineReducers({
  auth: authReducer
});
