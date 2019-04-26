import React from 'react';

const ImageList = props => {
  const images = props.images.map(({ id, urls, description }) => {
    return <img key={id} src={urls.regular} alt={description} />;
  });

  return <div>{images}</div>;
};

export default ImageList;

/**
 * NOTE
 * - ต้องมี key เพราะว่าตอน render list เยอะๆ จะได้หาง่าย รู้ว่าอันไหนมี ไม่ต้อง rerender
 * - ใช้ id ของ data ได้เลย สามารถ render ได้ไวขึ้น ถูกต้องขึ้น
 * - image.id ติดมาจาก api ที่ get มา
 * - แนะนำให้ใช้ key ใน div element
 * - destructuring { id, urls, description } สมาชิกของ array แต่ละตัวมี 3 อย่างที่ return กลับมา ลดการพิมพ์ซ้ำซ้อน {image.id, image.urls, image.description}
 */
