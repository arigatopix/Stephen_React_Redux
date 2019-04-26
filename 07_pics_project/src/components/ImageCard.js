import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.imageRef); // จะแสดง log เมื่อโหลด tag img เสร็จ แสดงว่ารูปมาแล้ว มันเลยมี clientHeight แสดง
    console.log(this.imageRef.current.clientHeight); // แสดงเร็ว ก่อนที่รูปจะแสดง ความสูงเลยเป็น 0
  }

  render() {
    const { description, urls } = this.props.image;
    return (
      <div>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;

/**
 * เรื่อง props ต้องใช้ props.image ตามชื่อ property ของ parent
 *
 * - ref เป็นของ react
 */
