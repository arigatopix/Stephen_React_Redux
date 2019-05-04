export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return action.payload; // state#1 , action#2 , return response.data ให้ react รู้ จากนั้น react จะ rerender (ตามพฤติกรรมของ react)
    default:
      return state; // first load state#0,action#1 จะ return [] ให้ redux store
  }
};

/**
 * NOTE :
 * - ใช้ switch case แทน if...else เพราะว่า  code จะ clean กว่า
 * - First state จะแสดงผล empty array ทุกครั้ง เพราะว่าต้องรอ  array จาก async await
 */
