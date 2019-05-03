import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => {
  // fetch data from json placeholder / posts
  //! bad approch !!! break the rule  ของ redux ตอนตอบเป็น plain object
  const promise = jsonPlaceholder.get('/posts');

  return {
    type : 'FETCH_POSTS',
    payload : promise
  };
};

/**
 * NOTE : 
 * - ไม่ใช่ object plain เพราะ 
 *    - ใช้ async await > transpile เป็น es 2015
 *    - มี code บางส่วน return request object (ที่ไป fetch) เป็น js plain object จริง แต่ไม่ใช่ action พอ dispatch ปุ้บก็ error ต้องใช้ async ที่ middleware
 *    - วิธีแก้ตอนแรก เอา async await ออก จะได้ object เหมือนเดิม แต่ว่าจะ return promise object 
 *    - ซึ่งเอา async await มีผลตอนแสดงผล เพราะไม่มี function callback รอ data ที่ส่งมาจาก jsonplaceholder) ทำให้ reducers มองไม่เหน response
  */