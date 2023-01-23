import {
  ADD_SUPLIER,
  SUPLIER_FAIL,
  GET_SUPLIER,
  GET_SUPLIER_FAIL,
  UPDATED,
  UPDATED_FAIL,
  DELETE_SUPLIER,
  DELETE_SUPLIER_FAIL,
  DETAIL_SUPLIER,
  DETAIL_SUPLIER_FAIL,
} from "../actions/suplier";

const initstate = {
  suplier: [],
  detail: null,
};

export const suplier = (state = initstate, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_SUPLIER:
      return {
        ...state,
        loading: false,
      };
    case SUPLIER_FAIL:
      return {
        ...state,
        loading: false,
        err: payload,
      };
    case GET_SUPLIER:
      return {
        ...state,
        loading: false,
        suplier: payload,
      };
    case GET_SUPLIER_FAIL:
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
    case DELETE_SUPLIER:
      return {
        loading: false,
      };
    case DELETE_SUPLIER_FAIL:
      return {
        loading: false,
        err: payload,
      };
    case DETAIL_SUPLIER:
      return {
        loading: false,
        detail: payload,
      };
    case DETAIL_SUPLIER_FAIL:
      return {
        loading: false,
        err: payload,
      };
    default:
      return state;
  }
};
