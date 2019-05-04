export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_USER':
      return [...state, action.payload]; // * ใช้ rest operator เพราะ action ครั้งนึงเรียกแค่ user เดียว ถ้ามีหลาย user ในหนึ่งหน้า ต้องใช้ add array
    default:
      return state;
  }
};
