import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
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
          // check status ตอนแรกเริ่ม page load โดยส่งค่าจาก google update ให้ action
          this.onAuthChange(this.auth.isSignedIn.get());

          // รอรับค่าจาก redux
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  // Event handle
  onAuthChange = isSignedIn => {
    // ส่งให้ action true/false แล้ว redux จะส่งค่าจาก state กลับมา บล็อคนี้คอยดูค่าจาก store
    if (isSignedIn) {
      // ส่ง google id เพื่อเช็คว่า user ไหนทำอะไร (ทดแทน user name ที่เราไม่มี) โดยใช้ gapi.auth2.getAuthInstance().currentUser.get().getId()
      // ส่งให้ action และใช้งานผ่าน payload
      this.props.signIn(this.auth.currentUser.get().getId());
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
    if (this.props.isSignedIn === null) {
      // ไม่รู้ว่า status อะไร จะใส่ spinner ก็ได้ หรือ null ซ่อน
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button
          onClick={this.onSignOutClick}
          className="ui negative google button"
        >
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button
          onClick={this.onSignInClick}
          className="ui primary google button"
        >
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

const mapStateToProps = state => {
  // รับ state จาก redux store
  // state.auth.isSignedIn ใช้แบบนี้เพราะเป็น function ของ google ส่ง true/false ใช้กับ button
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(
  mapStateToProps,
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
