import _ from 'loadash';
import {
  FETCH_STREAM,
  FETCH_STREAMS,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAM:
      // จะดึงข้อมูลจาก action ที่ส่ง action พร้อมกับ payload (response.data) เอามา update state ใน reducers
      // ใช้ Spread operator ตรง [] ไม่ใช่ array แต่เป็น key ของ object
      // ถ้า [action.payload.id]: action.payload มี key:value ตรงกับ ... state object เดิมจะถูก replace
      return { ...state, [action.payload.id]: action.payload };

    case CREATE_STREAM:
      // create เหมือนกับ fetch เพราะว่าถ้า id, payload ไม่ซ้ำมันก็จะขยาย state object ไปเอง
      return { ...state, [action.payload.id]: action.payload };

    case EDIT_STREAM:
      // edit ก็เรียก id เดิมมาแก้ แล้ว replace ใน object เดิม
      // * สังเกตุว่า single id จะมีการ return เหมือนกัน
      return { ...state, [action.payload.id]: action.payload };

    case DELETE_STREAM:
      // * ใช้ loadash จัดการ object ง่ายกว่า โดย omit จะไม่แก้ไข original object , โดยเรียก (objec, key) arg2 จะเป็น id เลย ไม่ต้อง action.payload.id (ดูใน action)
      return _.omit(state, action.payload);

    default:
      return state;
  }
};
