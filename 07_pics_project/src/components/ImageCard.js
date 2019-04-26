import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };

    // * Ref system ถ้าอยากจะ reach พวก DOM (html) ให้สร้าง ref ไว้ใน constructor แล้วใช้งานใน JSX ผ่าน ref property
    // และจำไว้ว่า JSX ไม่ใช่ DOM Element จริงๆ (เป็น method ของ react) ถ้าอยากเข้าถึง DOM ต้องใช้ ref
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    // ใส่ event listener เพื่อรอ tag img โหลดเสร็จแล้วถึงทำอะไรต่อ ..
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    // อย่าลืมใช้ Arrow Function เพราะว่าถูกเรียกอยู่ใต้ eventListener

    // ความสูงของรูป กำหนด span แสดงผล CSS Grid
    const height = this.imageRef.current.clientHeight;

    // Span
    const spans = Math.ceil(height / 10); // อัตรา span เอาความสูงของรูป หารด้วยขนาด px ของ css grid แต่ละช่อง

    this.setState({ spans }); // es2015 syntax
  };

  render() {
    const { description, urls } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
