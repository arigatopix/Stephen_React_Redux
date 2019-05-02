// 1) Action Creator (drop form)
export const selectSong = song => {
  // 2) Return an action (form!!)
  return {
    type: 'SONG_SELECTED', // required ต้องมี
    payload: song // ข้อมูลใน Form จะมีมากมีน้อย แล้วแต่
  };
};

// export default จะ export ได้แค่ function เดียว ในไฟล์นี้
// ! จำ ในนี้เรียก action creator และ return action เป็น JS object
// จะสมบูรณ์และใช้งานได้เมื่อใช้ร่วมกับ dispatch
