import { SIGN_IN, SIGN_OUT } from '../actions/types';

const INITAIL_STATE = {
  // ใช้เป็นตัวใหญ่ จะบอกคนที่แก้ไขคนอื่นๆ ว่าห้ามเปลี่ยน ห้ามแก้ไข object นี้
  isSignedIn: null,
  userId: null
};

export default (state = INITAIL_STATE, action) => {
  // function เรียก action มาคำนวณ โดย state ให้ตั้งเป็น INITAIL_STATE คือ copy จาก GoogleAuth component มาเลย
  // INITAIL_STATE สำหรับ first load page ให้ตั้งค่า state ของ reducer นี้เป็น null

  switch (action.type) {
    case SIGN_IN:
      // update object ขวาจะ replace ท้ายซ้าย และสร้าง obj ใหม่ขึ้นมา
      // รับ status และ userId ผ่าน action
      return { ...state, isSignedIn: true, userId: action.payload };
    case SIGN_OUT:
      // signout ต้อง reset state userId ด้วย
      return { ...state, isSignedIn: false, userId: null };
    default:
      return state;
  }
};

// Reducers ต้องเป็น pure function รับจาก action creators เท่านั้น
