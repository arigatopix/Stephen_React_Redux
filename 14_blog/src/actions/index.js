import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

// มีวิธีเรียก Posts และ User 3 วิธี
// 1. ใช้ component เรียกของใครของมัน > ถ้าเป็น user จะ fetchuser ซ้ำๆ 
// 2. วิธีแก้อันที่ 1 คือใช้ memoize ช่วยในการ fetch 
// 3. เรียก fetchPosts และ fetchUsers ไปพร้อมๆ กัน จากการเรียก posts ก่อน ตามข้างล่าง

// * เรียกครั้งเดียว fetchUser และ fetchPosts (compact กว่าวิธีอื่น)
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  // * ใช้ loadash ในการ map object (_.map(obj, 'key')) posts = {userId, id ... } แล้ว array ใหม่จะแสดง userId อย่างเดียว ..
  // แสดง array ใหม่เอาเฉพาะ userId ที่ไม่ซ้ำกันให้ใช้ _.uniq จะแสดง id ค่าเดียว
  // const userIds = _.uniq(_.map(getState().posts, 'userId'));
  // เรียก fetchUser() ผ่าน arg userIds
  // userIds.forEach(id => dispatch(fetchUser(id)));

  // * Alternate way use _.chain เป็น method ของ loadash เพื่อทำ method ไปเรื่อยๆ จนกว่าจะหยุด .value(); เพื่อ execute chain
  _.chain(getState().posts)
    .map('userId') // map key userId
    .uniq() // เอาเฉพาะ value userId ที่ unique
    .forEach(id => dispatch(fetchUser(id))) // dispatch ส่งไป redux-thunk จนกว่าจะได้ action
    .value();
}

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');
  // เรียก dispatch เมื่อ data fetch เสร็จแล้ว
  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: 'FETCH_USER', payload: response.data });
};

// ใช้ loadash memoize fetchUser อย่างเดียว
// export const fetchUser = id => dispatch => _fetchUser(id, dispatch);
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   // อย่าลืมใส่ argrument id,dispatch ด้วย
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({ type: 'FETCH_USER', payload: response.data });
// });

/**
 * Redux thunk -- ต้องการรวม action creator 
 * - process 
 *  - action creators > return action เพราะว่า async จะ return function (es5)
 *  - ใช้ redux thunk ในการแก้ปัญหา  function ถูกเรียก พร้อมกับ dispatch
 *  - รอจน request จบ ได้ action จึงเข้า dispatch แบบ manual 
 *  - เพราะงั้น การเรียก action ต้องมาร่วมกับ dispatch
 * ------ fetchPostsAndUsers() ------
 *  - เรียก fetchPosts > รอ request จะ return function > ได้ action ก็ dispatch (ใน function fetchPosts)
 *   - ต้องการเรียก fetchPosts() แบบ redux thunk ต้องเรียกผ่าน dispatch(fetchPosts()
 *   - ใส่ await dispatch(fetchPosts()) เพื่อ make sure ว่าจะไม่มีอะไรเกิดขึ้นก่อน request จะจบ
 * ------ getState() -----
 * - ใช้เพื่อเรียกดู state ใน redux thunk (หลังจากมี dispatch ไปแล้ว) ที่ถูกรวมด้วย createStore 
 * - 
  */