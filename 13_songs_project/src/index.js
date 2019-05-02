// Library
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // component ของ react-redux เหนือ App เพื่อเอา state ไปใช้ใน App ผ่าน props (store)
import { createStore } from 'redux'; // เพื่อเก็บ state จาก reducer เปลี่ยนแปลง state ได้จากทางนี้

// สร้างเอง
import App from './components/App';
import reducers from './reducers';

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.querySelector('#root')
);

// * NOTE ให้ตั้งค่าในไฟล์ให้ใช้ export default ถ้าใช้ 3rd party lib ก็ใช้แบบ { } (ดู document ของ lib ประกอบ)
// * store เก็บ state ของ redux โดยเรียก method createStore(..Reducer..) ตามตัวอย่าง เพื่อเชื่อม reducer กับ action เข้าหากัน
// * Provider คือจะส่ง action แล้วเรียก callBack function store เพื่อรับ state มาใช้ใน App
// * Provider ได้ functon dispatch  กลับมา
// * Connect จะรับ state จาก provider, กับรับ action
// * createStore(reducers) เสมอ เพื่อดู state ใน redux หากแก้ไขแล้ว connect ก็จะไปอัพเดทใน state