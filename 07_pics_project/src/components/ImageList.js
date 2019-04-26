import React from 'react';
import ImageCard from './ImageCard';
import './ImageList.css';

// Render image list ใช้ map อย่าลืม defined key ตอนที่ rerender จะได้ไม่ต้อง render ของเก่า
const ImageList = props => {
  const images = props.images.map(image => {
    return <ImageCard key={image.id} image={image} />;
  });

  return <div className="image-list">{images}</div>;
};

export default ImageList;
