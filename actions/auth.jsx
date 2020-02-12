import {headers} from '../rest/restAPI';
import * as V from '../utils/validation';
import {host} from '../constants/constants';

export const OPEN_LOGIN_DIALOG = 'OPEN_LOGIN_DIALOG';
export const UPDATE_LOGIN_DIALOG = 'UPDATE_LOGIN_DIALOG';
export const CLOSE_LOGIN_DIALOG = 'CLOSE_LOGIN_DIALOG';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

//export const host = "http://localhost:8888/";

export function openLoginDialog() {
    return {type: OPEN_LOGIN_DIALOG};
}

export function updateLoginDialog(fieldName, value) {
    return {type: UPDATE_LOGIN_DIALOG, payload: {fieldName, value}};
}

export function closeLoginDialog() {
    return {type: CLOSE_LOGIN_DIALOG};
}

function requestLogin() {
    return {
        type: LOGIN_REQUEST,
        payload: {
            isFetching: true,
            isAuthenticated: false
        }
    };
}

function successLogin() {
    return {
        type: LOGIN_SUCCESS,
        payload: {
            isFetching: false,
            isAuthenticated: true
        }
    }
}

function failedLogin(validations) {
    return {
        type: LOGIN_FAILURE,
        payload: {
            validations: validations,
            isFetching: false,
            isAuthenticated: false
        }
    }
}

function requestLogout() {
    return {
        type: LOGOUT_REQUEST,
        payload: {
            isFetching: true,
            isAuthenticated: true
        }
    }
}

function receiveLogout() {
    return {
        type: LOGOUT_SUCCESS,
        payload: {
            isFetching: false,
            isAuthenticated: false
        }
    }
}

export function loginAction() {
    return (dispatch, getState) => {
        const config = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                ...getState().auth.loginDialog.credentials
            })
        };

        dispatch(requestLogin());

        return fetch(host + 'auth', config)
            .then(response =>
                response.json().then(msg => ({msg, response}))
            ).then(({msg, response}) => {
                if (response.ok) {
                    if (msg.token) {
                        console.log(msg);
                        localStorage.setItem('WWW-Token', msg.token);
                        localStorage.setItem('tm', msg.timeout ? msg.timeout : 5000);

                        dispatch(successLogin())
                    } else {
                        dispatch(failedLogin([V.error('error', msg.errorMessage)]));
                    }
                } else {
                    dispatch(failedLogin())
                }
            }).catch(err => {
                dispatch(failedLogin())
            })
    }
}

export function logoutAction() {
    return dispatch => {
        dispatch(requestLogout());
        localStorage.clear();
        dispatch(receiveLogout())
    }
}