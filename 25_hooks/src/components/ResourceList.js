import React from "react";
import useResources from "./useResources";

const ResourceList = ({ resource }) => {
  // * 1) เรียกใช้ Hooks จาก useResources.js และใช้ข้อมูลจาก props ของ parent component
  const resources = useResources(resource);

  return (
    <div className="col">
      <ul className="list-group">
        {resources.map(record => (
          <li key={record.id} className="list-group-item">
            {record.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResourceList;

/**
 * ใช้ class-based ในการ fetch ข้อมูล
 *  - setState หลัง fetch เสร็จ
 *  - อย่าลืม componentDidMount จะ render แค่ครั้งเดียว เวลากด Posts, Todos มันจะไม่เปลี่ยนแปลงค่า
 *  - ใช้ componentDidUpdate หลังจาก update แล้ว แต่ !!
 *    - เมื่อ update component จะ rerender แล้วถูก update แล้วก็ rerender เหมือนเดิม เป็น loop ไม่มีที่สิ้นสุด
 *    - ต้องใช้ Logic แก้โดย componentDidUpdate(PrevProps)
 *      - PrevProps จะดู props ปัจจุบัน กับ props อันที่แล้ว .. ถ้าเหมือนเดิมจะไม่ rerender
 *
 * ใช้ function base
 *  - useEffect จะเป็นตัวแทน Life Cycle (componentDidMount และ componentDidUpdate)
 *  - useEffect(function, []) เมื่อไหร่ first render หรือมีการ update , useEffect จะ run fucntion
 * ! - อย่าลืม second element เพราะจะเป็นตัวเช็คการเปลี่ยนแปลง state
 *
 * จริงๆ แล้วมีแค่ input props > Hooks Logic > Output array
 *  - เราก็เลยเอา Hooks Logic ไป reuse ได้
 *  - อย่าลืมต้อง return ค่า state ปัจจุบันออกมาด้วย
 */
