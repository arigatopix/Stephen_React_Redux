import React from "react";
import ReactDOM from "react-dom";
import useLocation from "./useLocaion";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

const App = () => {
  // import HOOKS from useLocation
  const [lat, errorMessage] = useLocation();

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
