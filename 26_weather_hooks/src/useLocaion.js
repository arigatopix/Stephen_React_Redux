import { useState, useEffect } from "react";

export default () => {
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

  return [lat, errorMessage];
};

// return เป็น object ก็ได้ แต่ถ้าใช้เป็น function จะ return เป็น array ก็ดูง่าย เพราะว่าตอนเอาไปใช้ เรา destructuring แบบ array
