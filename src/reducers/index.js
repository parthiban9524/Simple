import { combineReducers } from "redux";
import { reducer as forms } from 'redux-form';
import setupReducer from "./setupReducer";


const appReducer = combineReducers({
  form: forms,
  setup : setupReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined
  }
  return appReducer(state, action)
}

export default rootReducer;