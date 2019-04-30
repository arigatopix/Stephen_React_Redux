import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div className="video-item item" onClick={() => onVideoSelect(video)}>
      <img
        alt={video.snippet.description}
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;

/**
 * NOTE
 * - จะ render แต่ละวีดีโอ โดยใช้ props จาก VideoList
 *---
 * เรื่อง KEY unique
 * ---
 * ! - จำ ตอนแรกลอง onClick={onVideoSelect(video)} ไม่ได้ใช้ arrow function จะทำให้ callBack เริ่มเองอัตโนมัติ
 * - เปลี่ยนมาเป็น onClick={() => onVideoSelect(video)} เพื่อรอรับ event click จาก User
 */
