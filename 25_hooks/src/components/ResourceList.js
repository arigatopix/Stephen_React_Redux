import React, { useState, useEffect } from "react";
import axios from "axios";

// HOOKS stuff
const useResources = resource => {
  // * 2) รับ resource จาก Component เพราะ Hooks คือการ shared function ไปหาแต่ละ component ได้

  // กรณี init state
  const [resources, setResources] = useState([]);

  // * 3) when update or rerender อย่าลืม argument ที่ 2 เอาไว้เช็คว่า function ใน useEffect จะทำงานหรือไม่
  useEffect(() => {
    // ใช้ IFEs ในการ fetch DATA โดยรับ resource มาจากวงเล็บที่สอง
    (async resource => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/${resource}`
      );
      // setState เมื่อมีการเปลี่ยนแปลง state (จากเดิม [] เป็นข้อมูลจากการ fetch)
      setResources(response.data);
    })(resource);
    // [resource] เป็นตัวเช็คใน useEffect ว่ามีค่าเปลี่ยนมั้ย
  }, [resource]);

  // ส่ง current state จาก array destructuring (เป็น array) ไปใช้ข้างนอก function useResources()
  return resources;
};

const ResourceList = ({ resource }) => {
  // * 1) เรียกใช้ Hooks โดยเอาข้อมูลจาก Parent component ..
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
