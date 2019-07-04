import React, { useState, useEffect } from "react";
import axios from "axios";

const ResourceList = ({ resource }) => {
  // ปกติจะเป็น props.resource เลย destructuring

  // init state
  const [resources, setResources] = useState([]);

  // ใช้ใน useEffect
  const fetchResources = async resource => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${resource}`
    );

    // setState เมื่อมีการเปลี่ยนแปลง state (จากเดิม [] เป็นข้อมูลจากการ fetch)
    setResources(response.data);
  };

  // when update or rerender อย่าลืม argument ที่ 2 เอาไว้เช็คว่า function ใน useEffect จะทำงานหรือไม่
  useEffect(() => {
    fetchResources(resource);
  }, [resource]);

  // ใน arrow function จะต้องเป็น pure function ไม่ให้ใช้ Promises
  // * arg ที่สองเป็น array เช็คว่า value ใน resource เปลี่ยนไปหรือไม่ ถ้าเปลี่ยนแปลง จะ run arrow function ... ถ้าไม่กำหนด arg จะทำให้ run arrow function ตลอดเวลา
  // กรณีที่ array arg ที่สองเป็น obj จะถูก call arrow function ตลอด เพราะว่า obj ไม่ใช่ primitive data type

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
 */
