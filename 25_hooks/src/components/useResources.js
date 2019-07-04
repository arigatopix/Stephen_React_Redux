import { useState, useEffect } from "react";
import axios from "axios";

// ** REUSE HOOKS function

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

export default useResources;
// ใช้เป็นตัวเล็ก เพราะแยกว่าเป็น function.. ส่วน component ใช้ตัวใหญ่
