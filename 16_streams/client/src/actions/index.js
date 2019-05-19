import streams from '../apis/streams';
import { SIGN_IN, SIGN_OUT } from './types';

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

// fetch data from apis เพื่อเอาไปใช้ใน component > connect > redux store
// ใช้ async เพื่อ fetch data ต้องใช้ redux thunk

export const createStream = formValues => async dispatch => {
  // post โดยรับ data ที่ submit มาจาก streamCreate
  // หลังจาก fetch เสร็จก็ dispatch แบบ manual เพื่อนำไป update ใน reducer
  streams.post('/streams', formValues);
};
