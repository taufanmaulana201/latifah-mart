import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGGED_IN = "LOGGED_IN";

export const login = (email, password) => {
  return (dispatch) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({
          type: LOGIN_SUCCESS,
          payload: user,
        });
        sessionStorage.setItem("user", JSON.stringify(user));
      })
      .catch((error) => {
        dispatch({
          type: LOGIN_FAIL,
          payload: error.code,
        });
      });
  };
};
