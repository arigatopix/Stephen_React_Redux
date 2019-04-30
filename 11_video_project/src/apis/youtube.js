import axios from 'axios';

const key = 'AIzaSyCPPYuWyJSZT8LayqTNmM0r-WYfaaDHLTE';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    type: 'video',
    key
  }
});

/**
 * NOTE
 * - ใช้ axios สามารถ config url ที่จะ request ได้
 * - param ตาม document
 * - ขาดตัวแปร q  เพื่อค้นหา video เด่วจะเซตทีหลัง
 * - youtube/v3/search?part=snippet&maxResults=1&q=bearhug'
 */
