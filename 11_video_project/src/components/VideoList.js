import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
  // Map array for VideoItem จะแสดงผลตามจำนวนสมาชิก
  const renderedList = videos.map(video => {
    return <VideoItem onVideoSelect={onVideoSelect} video={video} />;
  });

  // สั่งแสดงผลโดยมาจาก array map
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;

/**
 * NOTE
 * แทนที่ props ด้วย { video } เป็น destructuring เพราะ props รับมาเป็น object หลายๆ อัน เลยแทนด้วย video ไปเลย
 * - วิธีใช้ จากเดิม props.videos.id เป็น videos.id
 * ---
 * video={video} คือส่ง object api ผ่าน props เพื่อนำไปแสดงผล
 * ---
 * onVideoSelect={onVideoSelect} คือสร้าง props ให้กับ child (VideoItem) แล้วก็ callBack กลับไปที่ Parent (ปกติจะเป็น props.onVideoSelect)
 */
