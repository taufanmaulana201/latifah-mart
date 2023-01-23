import {
  ADD_LAPORAN,
  LAPORAN_FAIL,
  GET_LAPORAN,
  GET_LAPORAN_FAIL,
  UPDATED,
  UPDATED_FAIL,
  DELETE_LAPORAN,
  DELETE_LAPORAN_FAIL,
  DETAIL_LAPORAN,
  DETAIL_LAPORAN_FAIL,
} from "../actions/Laporan";

const initstate = {
  laporan: [],
  detail: null,
};

export const laporan = (state = initstate, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_LAPORAN:
      return {
        ...state,
        loading: false,
      };
    case LAPORAN_FAIL:
      return {
        ...state,
        loading: false,
        err: payload,
      };
    case GET_LAPORAN:
      return {
        ...state,
        loading: false,
        laporan: payload,
      };
    case GET_LAPORAN_FAIL:
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
    case DELETE_LAPORAN:
      return {
        loading: false,
      };
    case DELETE_LAPORAN_FAIL:
      return {
        loading: false,
        err: payload,
      };
    case DETAIL_LAPORAN:
      return {
        loading: false,
        detail: payload,
      };
    case DETAIL_LAPORAN_FAIL:
      return {
        loading: false,
        err: payload,
      };
    default:
      return state;
  }
};
