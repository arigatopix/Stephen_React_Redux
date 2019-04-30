import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
  // Map array for VideoItem จะแสดงผลตามจำนวนสมาชิก
  const renderedList = videos.map(video => {
    return <VideoItem video={video} />;
  });

  // สั่งแสดงผล
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;

/**
 * NOTE
 * แทนที่ props ด้วย { video } เป็น destructuring เพราะ props รับมาเป็น object หลายๆ อัน เลยแทนด้วย video ไปเลย
 * - วิธีใช้ จากเดิม props.videos.id เป็น videos.id
 * ---
 * video={video} คือส่ง object api ผ่าน props เพื่อนำไปแสดงผล
 */
