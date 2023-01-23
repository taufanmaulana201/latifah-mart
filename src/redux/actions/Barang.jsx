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

export const ADD_BARANG = "ADD_BARANG";
export const BARANG_FAIL = "BARANG_FAIL";
export const GET_BARANG = "GET_BARANG";
export const GET_BARANG_FAIL = "GET_BARANG_FAIL";
export const UPDATED = "UPDATED";
export const UPDATED_FAIL = "UPDATED_FAIL";
export const DELETE_BARANG = "DELETE_BARANG";
export const DELETE_BARANG_FAIL = "DELETE_BARANG_FAIL";
export const DETAIL_BARANG = "DETAIL_BARANG";
export const DETAIL_BARANG_FAIL = "DETAIL_BARANG_FAIL";

export const addbarang = (
  kode_barang,
  nama_barang,
  stok,
  harga_jual,
  suplier,
  catatan
) => {
  return async (dispatch) => {
    try {
      await addDoc(collection(db, "barang"), {
        kode_barang,
        nama_barang,
        stok,
        harga_jual,
        suplier,
        catatan,
      });
      dispatch({
        type: ADD_BARANG,
      });
      console.log("tambah success");
    } catch (e) {
      dispatch({
        type: BARANG_FAIL,
        payload: e,
      });
    }
  };
};

// kanggo mengambil
export const getbarang = () => {
  return async (dispatch) => {
    try {
      const get = await getDocs(collection(db, "barang"));
      dispatch({
        type: GET_BARANG,
        payload: get.docs.map((docs) => ({ ...docs.data(), id: docs.id })),
      });
    } catch (error) {
      dispatch({
        type: GET_BARANG_FAIL,
        payload: error,
      });
      console.log(error);
    }
  };
};
export const deletebarang = (id) => {
  return async (dispatch) => {
    try {
      const user = doc(db, "barang", id);
      await deleteDoc(user);
      dispatch({
        type: DELETE_BARANG,
      });
    } catch (error) {
      dispatch({
        type: DELETE_BARANG_FAIL,
        payload: err,
      });
    }
  };
};
export const upadtebarang = (
  idedit,
  kode_barang,
  nama_barang,
  stok,
  harga_jual,
  suplier,
  catatan
) => {
  return async (dispatch) => {
    try {
      // catatam : string to nomber : Number("value")

      const user = await doc(db, "barang", idedit);
      await updateDoc(user, {
        kode_barang,
        nama_barang,
        stok,
        harga_jual,
        suplier,
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
export const getdetail = (id) => {
  return async (dispatch) => {
    try {
      const user = doc(db, "barang", id);
      dispatch({
        type: DETAIL_BARANG,
        payload: user,
      });
    } catch (error) {
      dispatch({
        type: DETAIL_BARANG_FAIL,
        payload: error,
      });
    }
  };
};
