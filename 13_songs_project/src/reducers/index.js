import { combineReducers } from 'redux';

// Reducer เหมือนทำหน้าที่ของแต่ละแผนก
const songsReducer = () => {
  // Static list of song รอเรียกไปแสดง ไม่ต้องผ่านตัวแปรอะไร

  return [
    { title: 'No Digity', duration: '4.00' },
    { title: 'No Scrubs', duration: '3.55' },
    { title: 'Jump', duration: '2.20' },
    { title: 'All Star', duration: '3.40' },
    { title: 'Ah', duration: '1.02' }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

// Combine Reducers เชื่อม reducers เพื่อสร้าง state (data center)
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
