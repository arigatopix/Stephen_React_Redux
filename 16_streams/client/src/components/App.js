import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamList from "./streams/StreamList";
import StreamEdit from "./streams/StreamEdit";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";
import history from "../history";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/edit/:id" exact component={StreamEdit} />
            <Route path="/streams/delete/:id" exact component={StreamDelete} />
            <Route path="/streams/:id" exact component={StreamShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;

/**
 * NOTE
 * -- ROUTE --
 * - ใส่ specific id ให้ route มองเห็นตัวเลขที่ :id ตัว Componente Route จะ return object ให้ใช้
 * -- Switch --
 * - ปกติถ้าใส่แต Route .. React-React-Dom จะพยายามแสดงผลทุก path โดยเฉพาะ /stream/:id ซึ่ง id เป็น variable
 * - react-router-dom จะสับสนว่า /stream/new ก็เปน variable ของ :id เช่นกัน จึงแสดงผลทั้ง StreamList และ StreamShow
 * - ใส่ Switch เป็น component สำหรับบอก Route ว่าให้แสดงผลตามแตกต่างไปตาม path เลย แสดง component เดียว ไม่ต้องแสดงทั้งหมด
 */
