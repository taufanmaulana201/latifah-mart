import { async } from "@firebase/util";
import { data } from "autoprefixer";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../Firebase";

export const ADD_SUPLIER = "ADD_SUPLIER";
export const SUPLIER_FAIL = "SUPLIER_FAIL";
export const GET_SUPLIER = "GET_SUPLIER";
export const GET_SUPLIER_FAIL = "GET_SUPLIER_FAIL";
export const UPDATED = "UPDATED";
export const UPDATED_FAIL = "UPDATED_FAIL";
export const DELETE_SUPLIER = "DELETE_SUPLIER";
export const DELETE_SUPLIER_FAIL = "DELETE_SUPLIER_FAIL";
export const DETAIL_SUPLIER = "DETAIL_SUPLIER";
export const DETAIL_SUPLIER_FAIL = "DETAIL_SUPLIER_FAIL";

export const addsuplier = (alamat, catatan, email, hp, nama_suplier) => {
  return async (dispatch) => {
    try {
      await addDoc(collection(db, "suplier"), {
        alamat,
        catatan,
        email,
        hp,
        nama_suplier,
      });
      dispatch({
        type: ADD_SUPLIER,
      });
    } catch (e) {
      dispatch({
        type: SUPLIER_FAIL,
        payload: e,
      });
    }
  };
};

export const getsuplier = () => {
  return async (dispatch) => {
    try {
      const get = await getDocs(collection(db, "suplier"));
      dispatch({
        type: GET_SUPLIER,
        payload: get.docs.map((docs) => ({ ...docs.data(), id: docs.id })),
      });
    } catch (error) {
      dispatch({
        type: GET_SUPLIER_FAIL,
        payload: error,
      });
      console.log(error);
    }
  };
};
export const deletesuplier = (id) => {
  return async (dispatch) => {
    try {
      const user = doc(db, "suplier", id);
      await deleteDoc(user);
      dispatch({
        type: DELETE_SUPLIER,
      });
    } catch (error) {
      dispatch({
        type: DELETE_SUPLIER_FAIL,
        payload: err,
      });
    }
  };
};
export const upadtesuplier = (
  idedit,
  alamat,
  catatan,
  email,
  hp,
  nama_suplier
) => {
  return async (dispatch) => {
    try {
      // catatam : string to nomber : Number("value")

      const user = await doc(db, "suplier", idedit);
      await updateDoc(user, {
        alamat,
        catatan,
        email,
        hp,
        nama_suplier,
      });
      dispatch({
        type: UPDATED,
      });
    } catch (error) {
      dispatch({
        type: UPDATED_FAIL,
        payload: error,
      });
    }
  };
};
export const getsuplierbyid = (id) => {
  return async (dispatch) => {
    try {
      const user = doc(db, "SUPLIER", id);
      dispatch({
        type: DETAIL_SUPLIER,
        payload: user,
      });
    } catch (error) {
      dispatch({
        type: DETAIL_SUPLIER_FAIL,
        payload: error,
      });
    }
  };
};
