import { createBrowserHistory } from 'history';

export default createBrowserHistory();
/** NOTE
 * - ปกติ BrowserRouter จาก react-router-dom จะสร้าง history เพื่อดู url
 * - แต่มัน implement ยาก กรณีจะ auto redirect ต้องสร้าง history ใน action บ่อยๆ
 * - จะสร้าง history เอง เพื่อเรียกใช้ history แล้วใส่ path ให้มันง่ายๆ
 * - ปัญหาคือปกติ BrowserRouter มันสร้าง history เองภายในอยู่แล้ว จะต้องตั้งค่านิดหน่อย
 *  - ไป import ใน app.js กำหนด history เป็น props
 *  - import { Router } แทน { BrowserRouter }
 */
