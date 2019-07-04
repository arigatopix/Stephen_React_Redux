import React from "react";
import useResources from "./useResources";

const UserList = () => {
  // เรียก HOOKS มาใช้งาน ใช้ Hardcode users เพื่อ fetch api/users
  // * ข้อดีคือ แยกส่วน Logic กับแสดงผลชัดเจน
  const users = useResources("users");

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
  // * ห้ามลืมเด็ดขาด เมื่อ render list คือ key
};

export default UserList;
