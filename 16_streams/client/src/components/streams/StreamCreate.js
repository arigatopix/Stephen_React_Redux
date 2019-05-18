import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
  renderInput({ input, label }) {
    // Field ไม่รู้ว่าตัวเองเป็น input แบบไหน มีหน้าที่แค่ wiring ระหว่าง redux store กับ component ที่เป็น input
    // formProps รับค่ามาจาก Field component return input ที่มี function เกี่ยวกับ callback handler
    // onChange คือมีการแก้ไขเมื่อไหร่ ส่งข้อมูลไป formPorps, value ก็เช่นกัน
    // {...formProps.input} คือใช้ key value pairs เอา property จาก formPorps ทั้งหมดเมื่อ input element เรียกใช้งาน แบบ auto
    // destructuring {...formProps.input} เป็น { input }
    console.log({ input, label });
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
      </div>
    );
  }

  render() {
    // form เป็น html element
    // Field มาจาก redux-form เป็นตัว wiring redux กับ input component
    // จะเรียก renderInput พร้อมส่ง function ให้ใช้งาน เพื่อ connect ระหว่าง redux กับ input
    // props name จะส่งให้ this.renderInput สำหรับ label สามารถส่งผ่าน formProps (this.renderInput) ได้เหมือนกัน config เพิ่มนิดหน่อย และใน renderInput ต้องใส่ parameter เพิ่ม คือมี input , label
    return (
      <form className="ui form">
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
      </form>
    );
  }
}

export default reduxForm({
  // คล้ายๆ connect() เรียก function แต่อันนี้เรียกผ่าน object เพื่อ register ใน redux-form เก็บ name, value หรืออื่นๆ ที่เราเรียกใช้
  // form ตั้งชื่อให้เหมือนกับ reducer , streamCreater จะถูกสร้างใน redux-store ภายใน form
  form: 'streamCreate'
})(StreamCreate);

/**
 *  NOTE
 * - Field เป็น component
 * - reduxForm เป็นส่วน connect กับ lib redux form คอยดู redux store, เปลี่ยนแปลง value อัตโนมัติ
 *
 *
 * */
