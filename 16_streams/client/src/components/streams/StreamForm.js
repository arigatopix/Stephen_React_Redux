import React from 'react';
import { Field, reduxForm } from 'redux-form';

// มีหน้าที่เก็บ Logic / template ของ redux form แล้ว callback ไปหา  Parent (StreamCreate, StreamEdit)
class StreamForm extends React.Component {
  // check if input out of focus เอา props ของ redux form มาใช้
  renderError({ error, touched }) {
    if (error && touched) {
      return (
        <div className="ui error tiny message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValue => {
    // *  callback to parent รับข้อมูลจาก input
    this.props.onSubmit(formValue);
  };

  render() {
    // Form component รับข้อมูล
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

// Validate redux-form
const validate = formValue => {
  const errors = {};

  if (!formValue.title) {
    errors.title = 'You must enter a title';
  }

  if (!formValue.description) {
    errors.description = 'You must enter a description';
  }

  return errors;
};

export default reduxForm({
  form: 'streamForm',
  validate
})(StreamForm);
