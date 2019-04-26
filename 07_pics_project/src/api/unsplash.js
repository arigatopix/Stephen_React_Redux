import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID d2f6f5c0dec5b5d42917996d62c9b368f0bc771666660a2919542aeefc0099ac'
  }
});

// You can create a new instance of axios with a custom config. อะไรที่ใช้ร่วมกัน
