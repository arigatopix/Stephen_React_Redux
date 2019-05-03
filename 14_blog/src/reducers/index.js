import { combineReducers } from 'redux';
import postsReducer from './postsReducer';

export default combineReducers({
  post: postsReducer
});

/***
 * NOTE :
 * - REDUCERS คือแผนก มีหน้าที่ทำอะไรบางอย่างที่ dispatch ส่งข้อมูลมา (store.dispatch(..action..))
 * - reducers จะทำตาม state (ดึงมาจาก store), และ action type เพื่อ return object ไปเก็บที่ store
 * --- Rules of Reducers ---
 * - reducers ไม่ return undefined
 * - รับ state หรือ data ที่มาจาก previous state เท่านั้น (จาก redux store)
 *    - สำหรับตอนแรก init โปรแกรมไม่มี state (undefined) ให้ กำหนด default value ใน reducers เอาเอง
 *    - พอทำ state init จบ (reducer(state_init,action#1) > return state#1) ครั้งต่อไป reducers จะเรียก reducer(state#1, action#2)
 * - ไม่รับ หรือไม่ return อย่างอื่น นอกจาก state, action **
 * - ห้าม! mutate state ใน reducer จริงๆ JS ทำง่ายมาก พยายามอย่าใช้ method ที่ยุ่งกับ array, object เดิม ไปใช้พวก map, filter, forEach
 *    -- primitive เช่น number string จะเช็ค === ได้
 *    -- object เช่น array, object จะเช็ค === ได้เมื่ออยู่ reference เดียวกัน
 *      - const nums = [1] ,
 *      - nums === nums // true
 *      - nums === [1]; // false อยู่ memory คนละตำแหน่ง ถือว่าไม่เป็นอันเดียวกัน
 *  - จริงๆ แล้ว state ถูก mutate ทุกรอบของการ run reducer เพียงแต่ว่า function combineReducer มันมีตัวเช็คค่าของ state
 *  - hasChanged = hasChanged || nextStateForKey !== previousStateForKey >>>> 'true' run nextState, 'false' ให้หยุดที่ state ปัจจุบัน
 * - มันก็เลยเป็นที่มา ถ้าเรา mutate state เอง function ที่ว่ามันจะเพี้ยน ทำให้ส่ง state ต่อไปไม่ถูก !!!
 */
