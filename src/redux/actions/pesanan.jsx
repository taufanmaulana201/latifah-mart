import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../Firebase";

export const ADD_PESANAN = "ADD_PESANAN";
export const PESANAN_FAIL = "PESANAN_FAIL";
export const GET_PESANAN = "GET_PESANAN";
export const GET_PESANAN_FAIL = "GET_PESANAN_FAIL";
export const UPDATED = "UPDATED";
export const UPDATED_FAIL = "UPDATED_FAIL";
export const DELETE_PESANAN = "DELETE_PESANAN";
export const DELETE_PESANAN_FAIL = "DELETE_PESANAN_FAIL";
export const DETAIL_PESANAN = "DETAIL_PESANAN";
export const DETAIL_PESANAN_FAIL = "DETAIL_PESANAN_FAIL";

export const addpesanan = (
  alamat,
  barang,
  bayar,
  hp,
  nama_customer,
  tanggal_transaksi,
  total_transaksi
) => {
  return async (dispatch) => {
    try {
      await addDoc(collection(db, "pesanan"), {
        alamat,
        barang,
        bayar,
        hp,
        nama_customer,
        tanggal_transaksi,
        total_transaksi,
      });
      dispatch({
        type: ADD_PESANAN,
      });
    } catch (e) {
      dispatch({
        type: PESANAN_FAIL,
        payload: e,
      });
    }
  };
};

export const getpesanan = () => {
  return async (dispatch) => {
    try {
      const get = await getDocs(collection(db, "pesanan"));
      dispatch({
        type: GET_PESANAN,
        payload: get.docs.map((docs) => ({ ...docs.data(), id: docs.id })),
      });
    } catch (error) {
      dispatch({
        type: GET_PESANAN_FAIL,
        payload: error,
      });
      console.log(error);
    }
  };
};
export const deletepesanan = (id) => {
  return async (dispatch) => {
    try {
      const user = doc(db, "pesanan", id);
      await deleteDoc(user);
      dispatch({
        type: DELETE_PESANAN,
      });
    } catch (error) {
      dispatch({
        type: DELETE_PESANAN_FAIL,
        payload: err,
      });
    }
  };
};
export const upadtepesanan = (
  idedit,
  alamat,
  barang,
  bayar,
  hp,
  nama_customer,
  tanggal_transaksi,
  total_transaksi
) => {
  return async (dispatch) => {
    try {
      // catatam : string to nomber : Number("value")

      const user = await doc(db, "pesanan", idedit);
      await updateDoc(user, {
        alamat,
        barang,
        bayar,
        hp,
        nama_customer,
        tanggal_transaksi,
        total_transaksi,
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
export const getpesananbyid = (id) => {
  return async (dispatch) => {
    try {
      const user = doc(db, "pesanan", id);
      dispatch({
        type: DETAIL_PESANAN,
        payload: user,
      });
    } catch (error) {
      dispatch({
        type: DETAIL_PESANAN_FAIL,
        payload: error,
      });
    }
  };
};
