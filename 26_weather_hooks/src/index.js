import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

const App = () => {
  // init state Latitude
  const [lat, setLat] = useState(null);

  // init state errorMessage
  const [errorMessage, setErrorMessage] = useState("");

  // componentDidMount and componentDidUpdate ใช้ useEffect แทน .. จะมี second arg หรือไม่ก็ได้
  // ทำ setState เป็น function base
  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => setLat(position.coords.latitude),
      err => setErrorMessage(err.message)
    );
  }, []);

  // renderBody ทำ logic ก่อน แล้วไป render
  // ถ้าเป็น function base ใช้ variable ธรรมดาดีกว่าประกาศ function ใน function
  let content;
  if (errorMessage) {
    // errorMessage
    content = <div>Error : {errorMessage}</div>;
  } else if (lat) {
    // ได้รับ latitude
    content = <SeasonDisplay lat={lat} />;
  } else {
    // รอจากหน้าจอ
    content = <Spinner message={"Please accept location request..."} />;
  }

  return <div className="border red">{content}</div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));
