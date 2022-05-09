import { get } from "lodash";
const defaultState = {
  fetching: false,
  data: {},
  serverError: []
}
export default function setupReducer(state = defaultState, action) {
  switch (action.type) {
    case "REFCODE_PENDING":
    case "LOGIN_PENDING":
    case "FORGOT_PENDING": {
      return {
        fetching: true,
        data: {},
        serverError: []
      }
    }
    case "SIGNUP_PENDING":
    case "SEND_MSG_PENDING":
    case "SETUP_PASSWORD_PENDING": {
      return {
        ...state,
        fetching: true,
        data: {},
        serverError: []
      }
    }
    case "SIGNUP_REJECTED":
    case "SETUP_PASSWORD_REJECTED":
    case "LOGIN_REJECTED":
    case "FORGOT_REJECTED": {
      let m = get(action, 'meta.data');
      return {
        ...state,
        fetching: false,
        serverError: {
          'message': 'request failed try again.',
          'meta': m
        }
      }
    }
    case "SIGNUP_FULFILLED":
    case "SETUP_PASSWORD_FULFILLED":
    case "REFCODE_FULFILLED":
    case "LOGIN_FULFILLED":
    case "FORGOT_FULFILLED": {
      let response = action.payload.data;
      let code = get(response, 'status');
      let m = get(action, 'meta.data');
      if (code !== 200) {
        return {
          ...state,
          fetching: false,
          serverError: { ...get(response, 'data'), meta: m },
        }
      }
      let d = { ...response, meta: m }
      return {
        ...state,
        fetching: false,
        data: d
      }
    }
    case "CLEAR_DATA": {
      return {
        ...state,
        fetching: false,
        serverError: []
      }
    }
  }
  return state;
}