import api from "./api";

export function submitSignup(data) {
	console.log("data",data)
	return dispatch => {
		dispatch({
			type: "SIGNUP",
			payload: api.post('/register', data),
			meta: { data: "signup" },
		})
	};
}
export function submitLogin(data) {
	return dispatch => {
		dispatch({
			type: "LOGIN",
			payload: api.post('/login', data),
			meta: { data: "login" }
		});
	};
}
export function submitForgot(data) {
	return dispatch => {
		dispatch({
			type: "FORGOT",
			payload: api.post('/forgot', data),
			meta: { data: "forgot" }
		});
	};
}
export function setupPassword(data) {
	return dispatch => {
		dispatch({
			type: "SETUP_PASSWORD",
			payload: api.post('/reset', data),
			meta: { data: 'password' }
		})
	};
}

export function logout() {
	return dispatch => {
		dispatch({
			type: "LOGOUT",
			payload: api.post('/logout')
		})
	}
}
