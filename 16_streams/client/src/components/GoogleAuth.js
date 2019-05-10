import React from 'react';

class GoogleAuth extends React.Component {
  // init state ไม่ต้องใช้ redux ดูก็ได้ ใช้ function ของ google
  // isSignedIn first load เราไม่รู้ว่า signed รึยัง
  state = {
    isSignedIn : null
  }

  // Load gapi google
  componentDidMount() {
    // เรียก lib, หลังจากเรียกเสร็จแล้ว callback fn จะเรียก init ขึ้นมา
    window.gapi.load('client:auth2', () => {
      // load library และ callback fn
      window.gapi.client.init({
        // จาก client ที่ google ส่งมา และ clientId จาก console.google ..
        clientId:
          '1004366032385-qmtpdqe5n788jm6orqmhq0riptulrh41.apps.googleusercontent.com',
        scope: 'email' // scope list ใส่เพิ่มทีหลังได้ตาม doc
      }).then(() => {
        // เรียก Authentication function
        this.auth = window.gapi.auth2.getAuthInstance();
        // เรียก component rerender ถ้ามีการเปลี่ยนแปลง state .. โดย isSignedIn.get() จะ return true/false
        this.setState({ isSignedIn : this.auth.isSignedIn.get() });
      })
    });
  }


  renderAuthButton() {
    // check state isSignedIn
    if (this.state.isSignedIn === null) {
      return <div>I don't know if we are signed in</div>;
    } else if (this.state.isSignedIn) {
      return <div>I am signed</div>;
    } else {
      return <div>I am not sign in</div>
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;


/**
 * NOTE :
 * ---- Authentication ----
 * - จะต้องเรียก gapi.load(lib) ก่อน
 * - เรียก auth โดยใช้ gapi.client.init() ส่ง GoogleAuth object ซึ่งเป็น promises กลับมา ก็เลยใช้ .then ได้
 * - ใน doc หลังจากได้ object แล้ว GoogleAuth.then(onInit, onError)
 * - gapi.auth2.getAuthInstance() เป็น object สำหรับเรียกใช้ function ของ google เช่นการ signin signout ดูสถานะ 
  */