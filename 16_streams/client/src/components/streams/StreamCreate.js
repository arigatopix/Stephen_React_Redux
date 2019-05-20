import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {
  onSubmit = formValue => {
    // ตรงนี้รับ data ผ่านการ callback ผ่าน props (ที่เป็น this.onSubmit)แล้วสั่งให้ action ทำงาน
    this.props.createStream(formValue);
  };

  render() {
    // onSubmit คือส่ง props ให้ StreamForm, this.onSubmit คือเรียก action
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { createStream }
)(StreamCreate);
