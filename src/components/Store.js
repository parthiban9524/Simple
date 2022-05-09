import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import reducers from "../reducers/index"

export default createStore (reducers, applyMiddleware(promise, thunk, createLogger()));