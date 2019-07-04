import React, { useState } from "react";
import ResourceList from "./ResourceList";
import UserList from "./UserList";

const App = () => {
  const [resource, setResource] = useState("posts");
  // Array destructuring ... ใช้ชื่อ variable อะไรก็ได้
  // resource = state ปัจจุบัน,
  // setResource คือ function call ที่จะ update setState อันใหม่ : setState('posts')
  // useState('initValue') : state = { resource : initValue }

  return (
    <div className="container">
      <div className="row">
        <UserList />
      </div>
      <div className="row">
        <button
          className="btn btn-dark col"
          onClick={() => setResource("posts")}
        >
          Posts
        </button>
        <button
          className="btn btn-secondary col"
          onClick={() => setResource("todos")}
        >
          Todos
        </button>
      </div>
      <div className="row">
        <ResourceList resource={resource} />
      </div>
    </div>
  );
};

export default App;

/**
 * HOOKS w/ Functional Components สำหรับ shared logic between components
 *  - useState เป็น function กำหนด state
 *      - const [resource, setResource] = useState('posts') เป็น destructuring
 *     - resource คือ this.state.resource
 *     - setResource คือ this.setState({  ...  })
 */
