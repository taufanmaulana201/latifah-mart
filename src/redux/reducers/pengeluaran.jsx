import {
  ADD_PENGELUARAN,
  PENGELUARAN_FAIL,
  GET_PENGELUARAN,
  GET_PENGELUARAN_FAIL,
  UPDATED,
  UPDATED_FAIL,
  DELETE_PENGELUARAN,
  DELETE_PENGELUARAN_FAIL,
  DETAIL_PENGELUARAN,
  DETAIL_PENGELUARAN_FAIL,
} from "../actions/pengeluaran";

const initstate = {
  pengeluaran: [],
  detail: null,
};

export const pengeluaran = (state = initstate, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_PENGELUARAN:
      return {
        ...state,
        loading: false,
      };
    case PENGELUARAN_FAIL:
      return {
        ...state,
        loading: false,
        err: payload,
      };
    case GET_PENGELUARAN:
      return {
        ...state,
        loading: false,
        pengeluaran: payload,
      };
    case GET_PENGELUARAN_FAIL:
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
    case DELETE_PENGELUARAN:
      return {
        loading: false,
      };
    case DELETE_PENGELUARAN_FAIL:
      return {
        loading: false,
        err: payload,
      };
    case DETAIL_PENGELUARAN:
      return {
        loading: false,
        detail: payload,
      };
    case DETAIL_PENGELUARAN_FAIL:
      return {
        loading: false,
        err: payload,
      };
    default:
      return state;
  }
};
