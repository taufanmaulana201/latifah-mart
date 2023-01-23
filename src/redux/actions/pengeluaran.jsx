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

export const ADD_PENGELUARAN = "ADD_PENGELUARAN";
export const PENGELUARAN_FAIL = "PENGELUARAN_FAIL";
export const GET_PENGELUARAN = "GET_PENGELUARAN";
export const GET_PENGELUARAN_FAIL = "GET_PENGELUARAN_FAIL";
export const UPDATED = "UPDATED";
export const UPDATED_FAIL = "UPDATED_FAIL";
export const DELETE_PENGELUARAN = "DELETE_PENGELUARAN";
export const DELETE_PENGELUARAN_FAIL = "DELETE_PENGELUARAN_FAIL";
export const DETAIL_PENGELUARAN = "DETAIL_PENGELUARAN";
export const DETAIL_PENGELUARAN_FAIL = "DETAIL_PENGELUARAN_FAIL";

export const addpengeluaran = (
  tanggal_pengeluaran,
  jenis_pengeluaran,
  total,
  catatan
) => {
  return async (dispatch) => {
    try {
      await addDoc(collection(db, "pengeluaran"), {
        tanggal_pengeluaran,
        jenis_pengeluaran,
        total,
        catatan,
      });
      dispatch({
        type: ADD_PENGELUARAN,
      });
    } catch (e) {
      dispatch({
        type: PENGELUARAN_FAIL,
        payload: e,
      });
    }
  };
};

export const getpengeluaran = () => {
  return async (dispatch) => {
    try {
      const get = await getDocs(collection(db, "pengeluaran"));
      dispatch({
        type: GET_PENGELUARAN,
        payload: get.docs.map((docs) => ({ ...docs.data(), id: docs.id })),
      });
    } catch (error) {
      dispatch({
        type: GET_PENGELUARAN_FAIL,
        payload: error,
      });
      console.log(error);
    }
  };
};
export const deletepengeluaran = (id) => {
  return async (dispatch) => {
    try {
      const user = doc(db, "pengeluaran", id);
      await deleteDoc(user);
      dispatch({
        type: DELETE_PENGELUARAN,
      });
    } catch (error) {
      dispatch({
        type: DELETE_PENGELUARAN_FAIL,
        payload: err,
      });
    }
  };
};
export const upadtepengeluaran = (
  idedit,
  jenis_pengeluaran,
  total_pengeluaran,
  catatan
) => {
  return async (dispatch) => {
    try {
      // catatam : string to nomber : Number("value")

      const user = await doc(db, "pengeluaran", idedit);
      await updateDoc(user, {
        jenis_pengeluaran,
        total_pengeluaran,
        catatan,
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
export const getpengeluaranbyid = (id) => {
  return async (dispatch) => {
    try {
      const user = doc(db, "pengeluaran", id);
      dispatch({
        type: DETAIL_PENGELUARAN,
        payload: user,
      });
    } catch (error) {
      dispatch({
        type: DETAIL_PENGELUARAN_FAIL,
        payload: error,
      });
    }
  };
};
