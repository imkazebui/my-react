import { combineReducers } from "redux";
import appReducer from "../modules/common/App";
// import { accountReducer } from '../modules/account';
/**
 * This place is to register all reducers of the app.
 */

export default combineReducers({
  app: appReducer
  // account: accountReducer,
});
