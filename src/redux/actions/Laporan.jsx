import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../Firebase";

export const ADD_LAPORAN = "ADD_LAPORAN";
export const LAPORAN_FAIL = "LAPORAN_FAIL";
export const GET_LAPORAN = "GET_LAPORAN";
export const GET_LAPORAN_FAIL = "GET_LAPORAN_FAIL";
export const UPDATED = "UPDATED";
export const UPDATED_FAIL = "UPDATED_FAIL";
export const DELETE_LAPORAN = "DELETE_LAPORAN";
export const DELETE_LAPORAN_FAIL = "DELETE_LAPORAN_FAIL";
export const DETAIL_LAPORAN = "DETAIL_LAPORAN";
export const DETAIL_LAPORAN_FAIL = "DETAIL_LAPORAN_FAIL";

export const addlaporan = (tgl, cart, sum, bayar) => {
  const data = {
    barang: cart,
    bayar: bayar,
    jenis_transaksi: "penjualan",
    tanggal_transaksi: tgl,
    total_transaksi: sum,
  };
  return async (dispatch) => {
    try {
      await addDoc(collection(db, "laporan"), data);
      dispatch({
        type: ADD_LAPORAN,
      });
      window.location.reload();
    } catch (e) {
      dispatch({
        type: LAPORAN_FAIL,
        payload: e,
      });
    }
  };
};

export const getlaporan = () => {
  return async (dispatch) => {
    try {
      const get = await getDocs(collection(db, "laporan"));
      dispatch({
        type: GET_LAPORAN,
        payload: get.docs.map((docs) => ({ ...docs.data(), id: docs.id })),
      });
    } catch (error) {
      dispatch({
        type: GET_LAPORAN_FAIL,
        payload: error,
      });
      console.log(error);
    }
  };
};
export const deletelaporan = (id) => {
  return async (dispatch) => {
    try {
      const user = doc(db, "laporan", id);
      await deleteDoc(user);
      dispatch({
        type: DELETE_LAPORAN,
      });
    } catch (error) {
      dispatch({
        type: DELETE_LAPORAN_FAIL,
        payload: err,
      });
    }
  };
};
export const upadtelaporan = (
  idedit,
  jenis_pengeluaran,
  total_pengeluaran,
  catatan
) => {
  return async (dispatch) => {
    try {
      // catatam : string to nomber : Number("value")

      const user = await doc(db, "laporan", idedit);
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
export const getlaporanbyid = (id) => {
  return async (dispatch) => {
    try {
      const user = doc(db, "laporan", id);
      dispatch({
        type: DETAIL_LAPORAN,
        payload: user,
      });
    } catch (error) {
      dispatch({
        type: DETAIL_LAPORAN_FAIL,
        payload: error,
      });
    }
  };
};
