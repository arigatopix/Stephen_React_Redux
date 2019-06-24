import streams from "../apis/streams";
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM
} from "./types";
import history from "../history";

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

// fetch data from apis เพื่อเอาไปใช้ใน component > connect > redux store
// ใช้ async เพื่อ fetch data ต้องใช้ redux thunk

export const createStream = formValues => async (dispatch, getState) => {
  // post โดยรับ data ที่ submit มาจาก streamCreate
  // หลังจาก fetch เสร็จก็ dispatch แบบ manual เพื่อนำไป update ใน reducer
  // รับ userId จาก redux store โดยใช้ getState() เพื่อเรียก state ใน store
  // * getStore() เคยใช้ใน 14_blogs เพื่อเรียก state ในที่นี้จะใช้ auth.userId เพื่อบอกว่า user ไหนเป็นคนสร้าง
  // auth.userId มาจาก store auth (บอก userId ตั้งแต่มีการ signIn)

  // * destructuring { userId } คือ getState.auth.userId เป็น object ที่มี key : value
  const { userId } = getState().auth;

  // เพิ่ม userId ลงไปใน state ของ streams เพื่อบอกว่าใครสร้าง
  // userId จะถูก post ไปที่ database ด้วย
  const response = await streams.post("/streams", { ...formValues, userId });

  // redirect when create success
  // สั่งให้ url เป็น localhost:3000/
  history.push("/");

  dispatch({ type: CREATE_STREAM, payload: response.data });
};

export const fetchStreams = () => async dispatch => {
  // GET /streams
  const response = await streams.get("/streams");

  dispatch({ type: FETCH_STREAMS, payload: response.data });
};

export const fetchStream = id => async dispatch => {
  // GET streams/:id
  const response = await streams.get(`/streams/${id}`);

  dispatch({ type: FETCH_STREAM, payload: response.data });
};

export const editStream = (id, formValues) => async dispatch => {
  // PUT streams/:id for edit
  // รับข้อมูลเดิมมาด้วย (formValues)
  // PUT method Update ALL properties of a record
  // PATCH method Update SOME properties of a record เพื่อให้ userId, id ที่ไม่ได้รับจาก StreamEdit overwrite หายไปจาก record
  const response = await streams.patch(`/streams/${id}`, formValues);

  // redirect
  history.push("/");
  dispatch({ type: EDIT_STREAM, payload: response.data });
};

export const deleteStream = id => async dispatch => {
  // DELETE ไม่ต้อง return ค่าอะไร
  await streams.delete(`/streams/${id}`);

  // dispatch เพื่อ update ค่าใน redux store (ใช้ reducers)
  dispatch({ type: DELETE_STREAM, payload: id });

  // redirect
  history.push("/");
};
