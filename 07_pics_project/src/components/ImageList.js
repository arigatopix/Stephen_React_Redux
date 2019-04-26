import React from 'react';
import ImageCard from './ImageCard';
import './ImageList.css';

// Render image list
const ImageList = props => {
  const images = props.images.map(image => {
    return <ImageCard key={image.id} image={image} />;
  });

  return <div className="image-list">{images}</div>;
};

export default ImageList;

/**
 * NOTE ความต้องการ
 * - ตั้งค่าให้รูปที่เป็นแนวตั้ง วาง grid-row-end span ไป 2 ช่อง ส่วนแนวนอนเหมือนเดิม เพื่อให้ช่องว่างระหว่างรูปน้อยที่สุด และไม่ overlap กัน
 */
