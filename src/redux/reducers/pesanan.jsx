import {
  ADD_PESANAN,
  PESANAN_FAIL,
  GET_PESANAN,
  GET_PESANAN_FAIL,
  UPDATED,
  UPDATED_FAIL,
  DELETE_PESANAN,
  DELETE_PESANAN_FAIL,
  DETAIL_PESANAN,
  DETAIL_PESANAN_FAIL,
} from "../actions/pesanan";

const initstate = {
  pesanan: [],
  detail: null,
};

export const pesanan = (state = initstate, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_PESANAN:
      return {
        ...state,
        loading: false,
      };
    case PESANAN_FAIL:
      return {
        ...state,
        loading: false,
        err: payload,
      };
    case GET_PESANAN:
      return {
        ...state,
        loading: false,
        pesanan: payload,
      };
    case GET_PESANAN_FAIL:
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
    case DELETE_PESANAN:
      return {
        loading: false,
      };
    case DELETE_PESANAN_FAIL:
      return {
        loading: false,
        err: payload,
      };
    case DETAIL_PESANAN:
      return {
        loading: false,
        detail: payload,
      };
    case DETAIL_PESANAN_FAIL:
      return {
        loading: false,
        err: payload,
      };
    default:
      return state;
  }
};
