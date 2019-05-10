const INITAIL_STATE = {
  // ใช้เป็นตัวใหญ่ จะบอกคนที่แก้ไขคนอื่นๆ ว่าห้ามเปลี่ยน ห้ามแก้ไข object นี้
  isSignedIn: null
};

export default (state = INITAIL_STATE, action) => {
  // function เรียก action มาคำนวณ โดย state ให้ตั้งเป็น INITAIL_STATE คือ copy จาก GoogleAuth component มาเลย
  // INITAIL_STATE สำหรับ first load page ให้ตั้งค่า state ของ reducer นี้เป็น null

  switch (action.type) {
    case 'SIGN_IN':
      // update object ขวาจะ replace ท้ายซ้าย และสร้าง obj ใหม่ขึ้นมา
      return { ...state, isSignedIn: true };
    case 'SIGN_OUT':
      return { ...state, isSignedIn: false };
    default:
      return state;
  }
};

// Reducers ต้องเป็น pure function รับจาก action creators เท่านั้น
