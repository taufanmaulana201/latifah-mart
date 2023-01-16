import { LOGIN_FAIL, LOGIN_SUCCESS, LOGGED_IN } from "../actions/auth";

const initstate = {
  loading: true,
  user: null,
  err: null,
};

export const authreducers = (state = initstate, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        err: payload,
      };
    // case LOGGED_IN:
    //   return {
    //     ...state,
    //     loading: false,
    //     user: payload,
    //   };

    default:
      return state;
  }
};
