import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
  // init state ไม่ต้องใช้ redux ดูก็ได้ ใช้ function ของ google แต่จะให้ดี ไม่ควรมี logic ใน component
  // isSignedIn first load เราไม่รู้ว่า signed รึยัง
  state = {
    isSignedIn: null
  };

  // Load gapi google
  componentDidMount() {
    // เรียก lib, หลังจากเรียกเสร็จแล้ว callback fn จะเรียก init ขึ้นมา
    window.gapi.load('client:auth2', () => {
      // load library และ callback fn
      window.gapi.client
        .init({
          // จาก client ที่ google ส่งมา และ clientId จาก console.google ..
          clientId:
            '1004366032385-qmtpdqe5n788jm6orqmhq0riptulrh41.apps.googleusercontent.com',
          scope: 'email' // scope list ใส่เพิ่มทีหลังได้ตาม doc
        })
        .then(() => {
          // เรียก Authentication function
          this.auth = window.gapi.auth2.getAuthInstance();
          // check status ตอนแรกเริ่ม page load
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          // event listener  เมื่อ status เปลี่ยนแปลงจะเรียก this.onAuthChange (เป็น function Listen for changes in the current user's sign-in state.)
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  // Event handle
  onAuthChange = isSignedIn => {
    // เมื่อไหร่มีการ signIn, หรือ signOut จะส่งไปให้ redux store รับ state จาก this.auth.isSignedIn.listen()

    // รอรับค่า state จาก redux store
    if (isSignedIn) {
      this.props.signIn();
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    // เรียก function ของ google จะใส่ใน onClick เลยก็ได้ แต่แยกออกมาก็จะเข้าใจง่ายดี
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    // check state isSignedIn
    if (this.state.isSignedIn === null) {
      // ไม่รู้ว่า status อะไร จะใส่ spinner ก็ได้ หรือ null ซ่อน
      return null;
    } else if (this.state.isSignedIn) {
      return (
        <button
          onClick={this.onSignOutClick}
          className="ui green google button"
        >
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} className="ui red google button">
          <i className="google icon" />
          Sign in with Google
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default connect(
  null,
  { signIn, signOut }
)(GoogleAuth);

/**
 * NOTE :
 * ---- Redux ----
 * - ใช้ redux เพื่อให้ access ข้อมูลจากส่วนกลางที่เดียว
 * - เอา redux มาช่วยอ่าน state ของ google ว่า signIn หรือยัง
 * - ย้าย logic ไว้ใน action แทนที่จะเป็น component
 * - component ต่างๆ เรียก redux ไปใช้งานง่ายกว่า เรียก state จาก component
 * - กดปุ่ม > action > google oauth > action(change oauth) > redux
 */
