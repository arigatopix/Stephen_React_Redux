import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () =>  async dispatch => {

    const response = await jsonPlaceholder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload : response });
    // เรียก dispatch เมื่อ async ส่งข้อมูลกลับมา คำถามคือทำไมไม่มีปัญหา ??
    // ได้เพราะ เมื่อไหร่ที่เรียก action จะ return request object แทนที่จะเป็น action object (ปกติ thunk ไม่สนอยู่แล้วว่าจะเป็นอะไร) หลังจากนั้น พอได้ข้อมูลก็จะเรียก dispatch 
};

/**
 * NOTE : 
 * - ไม่ใช่ object plain เพราะ 
 *    - ใช้ async await > transpile เป็น es 2015
 *    - มี code บางส่วน return request object (ที่ไป fetch) เป็น js plain object จริง แต่ไม่ใช่ action พอ dispatch ปุ้บก็ error ต้องใช้ async ที่ middleware
 *    - วิธีแก้ตอนแรก เอา async await ออก จะได้ object เหมือนเดิม แต่ว่าจะ return promise object 
 *    - ซึ่งเอา async await มีผลตอนแสดงผล เพราะไม่มี function callback รอ data ที่ส่งมาจาก jsonplaceholder) ทำให้ reducers มองไม่เหน response
 *    ----------------------
 * Middleware
 * - คือ Async Action creators โดยใช้ redux thunk
 * - สามารถเรียก action เป็น object หรือ function ก็ได้
 * - เรียก dispatch เพื่อสั่ง action ทำงานผ่าน reducers และ getStore เพื่อดู redux store เมื่อไหร่ก็ได้
 * - หลังจาการอ request ส่งมา middleware จะเปลี่ยน function เป็น Action เพื่อเข้า dispatch ปกติ
 * - ลองดู flow behind the scenes of redux thunk
 * --------
 * - เปลี่ยนโครงสร้าง return action object เป็น request object (function) ให้ middleware จัดการ
  */