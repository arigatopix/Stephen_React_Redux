import React from "react";
import axios from "axios";

class ResourceList extends React.Component {
  // init state
  state = { resources: [] };

  async componentDidMount() {
    // * อย่าลืม จะ run componentDidMout แค่ครั้งเดียว
    // * อย่าลืม ถ้าใช้ await จะต้องมี async หน้า function

    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${this.props.resource}`
    );

    // update state หลัง fetch เสร็จ
    this.setState({ resources: response.data });
  }

  // update resource
  async componentDidUpdate(PrevProps) {
    if (PrevProps.resource !== this.props.resource) {
      // เช็ค Props อันที่แล้ว ถ้าไม่มีการเปลี่ยนแปลง จะไม่ทำตามเงื่อนไข
      console.log(PrevProps);

      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/${this.props.resource}`
      );

      // update state หลัง fetch เสร็จ
      this.setState({ resources: response.data });
    }
  }

  render() {
    return <div>{this.state.resources.length}</div>;
  }
}

export default ResourceList;

/**
 * ใช้ class-based ในการ fetch ข้อมูล
 *  - setState หลัง fetch เสร็จ
 *  - อย่าลืม componentDidMount จะ render แค่ครั้งเดียว เวลากด Posts, Todos มันจะไม่เปลี่ยนแปลงค่า
 *  - ใช้ componentDidUpdate หลังจาก update แล้ว แต่ !!
 *    - เมื่อ update component จะ rerender แล้วถูก update แล้วก็ rerender เหมือนเดิม เป็น loop ไม่มีที่สิ้นสุด
 *    - ต้องใช้ Logic แก้โดย componentDidUpdate(PrevProps)
 *      - PrevProps จะดู props ปัจจุบัน กับ props อันที่แล้ว .. ถ้าเหมือนเดิมจะไม่ rerender
 */
