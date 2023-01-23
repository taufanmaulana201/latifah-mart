import {
  ADD_BARANG,
  BARANG_FAIL,
  GET_BARANG,
  GET_BARANG_FAIL,
  UPDATED,
  UPDATED_FAIL,
  DELETE_BARANG,
  DELETE_BARANG_FAIL,
  DETAIL_BARANG,
  DETAIL_BARANG_FAIL,
} from "../actions/Barang";

const initstate = {
  barang: [],
  detail: null,
};

export const addbarang = (state = initstate, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_BARANG:
      return {
        ...state,
        loading: false,
      };
    case BARANG_FAIL:
      return {
        ...state,
        loading: false,
        err: payload,
      };
    case GET_BARANG:
      return {
        ...state,
        loading: false,
        barang: payload,
      };
    case GET_BARANG_FAIL:
      return {
        loading: false,
        err: payload,
      };
    case UPDATED:
      return {
        loading: false,
      };
    case UPDATED_FAIL:
      return {
        loading: false,
        err: payload,
      };
    case DELETE_BARANG:
      return {
        loading: false,
      };
    case DELETE_BARANG_FAIL:
      return {
        loading: false,
        err: payload,
      };
    case DETAIL_BARANG:
      return {
        loading: false,
        detail: payload,
      };
    case DETAIL_BARANG_FAIL:
      return {
        loading: false,
        err: payload,
      };
    default:
      return state;
  }
};
