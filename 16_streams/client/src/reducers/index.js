import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';

// เอาไว้สร้าง reducers ใน redux store
export default combineReducers({
  auth: authReducer,
  form: formReducer
});
