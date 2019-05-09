import React from 'react';

class GoogleAuth extends React.Component {
  // Load gapi google
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      // load library และ callback fn
      window.gapi.client.init({
        // จาก client ที่ google ส่งมา และ clientId จาก console.google ..
        clientId:
          '1004366032385-qmtpdqe5n788jm6orqmhq0riptulrh41.apps.googleusercontent.com',
        scope: 'email' // scope list
      });
    });
  }

  render() {
    return <div>GoogleAuth</div>;
  }
}

export default GoogleAuth;
