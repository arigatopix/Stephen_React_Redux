import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
  renderError({ error, touched }) {
    // รับจาก meta สนใจแค่ตอน error  และตอนที่ user out of focus
    // sematic ui จะซ่อน ui error message ไว้ ต้องไปเพิ่ม className error ที่ form
    if (error && touched) {
      return (
        <div className="ui error tiny message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    // Field ไม่รู้ว่าตัวเองเป็น input แบบไหน มีหน้าที่แค่ wiring ระหว่าง redux store กับ component ที่เป็น input
    // formProps รับค่ามาจาก Field component return input ที่มี function เกี่ยวกับ callback handler
    // onChange คือมีการแก้ไขเมื่อไหร่ ส่งข้อมูลไป formPorps, value ก็เช่นกัน
    // {...formProps.input} คือใช้ key value pairs เอา property จาก formPorps ทั้งหมดเมื่อ input element เรียกใช้งาน แบบ auto
    // destructuring {...formProps.input} เป็น { input }
    // แสดง error message ตอนที่ input element out of focus ส่ง meta ไปทำเงื่อนไขใน renderError
    // this ในนี้เป็น global scope (เพราะเรียกใช้ภายใต้ Field component) แก้โดยใช้ arrow function

    // ช่วยให้ user เห็นง่ายขึ้น โดยเปลี่ยน className ให้แสดงสีเมื่อ error
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;

    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit(formValue) {
    // formValue รับค่าจาก this.props.handleSubmit ข้อดีคือ return name, value ของ Field ที่รับจาก input
    // ไม่ต้อง preventDefualt เพราะ redux-form ทำให้
    console.log(formValue);
  }

  render() {
    // form เป็น html element
    // Field มาจาก redux-form เป็นตัว wiring redux กับ input component
    // จะเรียก renderInput พร้อมส่ง function ให้ใช้งาน เพื่อ connect ระหว่าง redux กับ input
    // props name จะส่งให้ this.renderInput สำหรับ label สามารถส่งผ่าน formProps (this.renderInput) ได้เหมือนกัน config เพิ่มนิดหน่อย และใน renderInput ต้องใส่ parameter เพิ่ม คือมี input , label
    // onSubmit โดยใช้ redux-form จะต้องเรียก this. ซึ่งเป็น props ของ Field (redux-form) จะ return name, value และไม่ต้องใช้  e.preventDefault()
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

// validate function
const validate = formValue => {
  // เช็คความถูกต้อง { name : value } ของ component Field
  // form จะไม่ถูก submit ถ้ามี error
  // จะตั้งให้ return NAME Field และ error message เป็น object
  // ตั้งค่าใน reduxForm เพื่อ wire up to redux-form ตั้งค่าใน redux  ชื่อเดียวกับ function validate
  // redux form จะรู้จัก function validate อัตโนมัติ จะต้องตั้งค่า return object ให้ตรงกับ name  ใน component field ด้วย
  // เมื่อไหร่มีการ interaction กับ Field ,​ redux form จะเช็ค rerender ตลอดเวลา ถ้ามี error เกิดตามเงื่อนไข จะส่ง error message  ผ่าน > component={this.renderInput} > เรียกใช้ error ใน meta (คล้ายๆ กำหนด label)

  const errors = {};

  if (!formValue.title) {
    // กรณี title input เป็นว่างๆ empty
    // ต้องตั้งชื่อ object ให้ตรงกับ name ใน component Field เพื่อส่ง error
    errors.title = 'You must enter a title';
  }

  if (!formValue.description) {
    errors.description = 'You must enter a description';
  }

  return errors;
};

export default reduxForm({
  // คล้ายๆ connect() เรียก function แต่อันนี้เรียกผ่าน object เพื่อ register ใน redux-form เก็บ name, value หรืออื่นๆ ที่เราเรียกใช้
  // form ตั้งชื่อให้เหมือนกับ reducer , streamCreater จะถูกสร้างใน redux-store ภายใน form
  form: 'streamCreate',
  validate
})(StreamCreate);

/**
 *  NOTE
 * - Field เป็น component
 * - reduxForm เป็นส่วน connect กับ lib redux form คอยดู redux store, เปลี่ยนแปลง value อัตโนมัติ
 * ----
 *
 * */
