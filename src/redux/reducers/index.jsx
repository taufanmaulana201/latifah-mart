import { combineReducers } from "redux";
import { authreducers } from "./Auth";
const reducers = combineReducers({
  Auth: authreducers,
});

export default reducers;
