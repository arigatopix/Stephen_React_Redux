import _ from 'lodash'
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');
  // เรียก dispatch เมื่อ data ถูก fetch
  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = id => dispatch => _fetchUser(id, dispatch);
const _fetchUser = _.memoize(async (id, dispatch) => {
  // อย่าลืมใส่ argrument id,dispatch ด้วย
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: 'FETCH_USER', payload: response.data });
});


/**
 * ** _.memoize(function) ใช้จำที่เคย fetch ไปแล้ว
 * ** และการ fetchUser จะ fetch ทุกครั้งถ้ามีการเรียก PostList (10 posts ต่อ user จะเรียก user ซ้ำ 10 ครั้ง ) จึงใช้ memoize เข้ามาช่วย
 * - ใส่ _.memoize หน้า function(id) ..
 *    - จะ fetchUser 10 ครั้งเพราะว่า redux-thunk จะ return function ที่ไม่ใช่ dispatch จนกว่าจะ fetch เสร็จ
 * - ใส่ _.memoize ที่หน้า async เพราะว่า....
 *    - เรียก fetchUser แล้ว redux thunk จะดูว่า return เป็น function หรือ dispatch 
 *    - redux thunk จะ return ค่าที่ fetch ได้จริงๆ หลังจากได้ dispatch
 *    - _.memoize จะจำที่เคย fetch ไปแล้ว ก็คือจะจำหลังจากได้ dispatch
 *    - ดังนั้นเมื่อ UserHeader เรียกใช้งาน fetchUser และ fetchUser ส่ง dispatch ไปครั้งนึงแล้วมันก็จะจำ ไม่ fetch ซ้ำอีก
 *    - แต่จริงๆ ไม่ใช่ เพราะว่า fetchUser ถูกเรียกแต่ละครั้ง component จะ rerender ทุกครั้ง ทำให้ _.memoize ถูกสร้างใหม่ตลอด ไม่ได้จำซักที ถูก fetch 10 ครั้งอยู่ดี
 * -- สรุป --
 * - เอา dispatch ออกมาไว้ private function _fetchUser เมื่อไหร่ที่ fetchUser เรียก .memoize จะ function นี้ไว้
 * - ข้อเสียคือจะเรียก action มาครั้งเดียว ต่อ userId และหลังจาก fetch เสร็จ memoize จะจำไว้ ... ถ้าเกิดข้อมูล api update fetchUser จะไม่ rerender
  */