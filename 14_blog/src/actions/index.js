import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');
  // เรียก dispatch เมื่อ data ถูก fetch
  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

// action อย่าลืมใช้ redux-thunk เพื่อให้สามารถส่ง function object หลังจาก fetch ข้อมูลเสด thunk return action ไปให้ dispatch
