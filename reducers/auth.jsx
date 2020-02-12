import * as A from '../actions/auth';
import {API} from "../rest/restAPI";
import {Stack} from 'immutable';

const authState = {
    isFetching: false,
    isAuthenticated: localStorage.getItem('WWW-Token') ? true : false,
    loginDialog: {
        credentials: {},
        validations: Stack(),
        isOpen: true
    },
    profileDialog: {
        isOpen: false,
        loggedUser: {}
    }
};

export default function auth(state = authState, action) {
    switch (action.type) {
        case A.OPEN_LOGIN_DIALOG:
            return {
                ...state,
                loginDialog: {
                    ...state.loginDialog,
                    isOpen: true
                },
                profileDialog: {
                    ...state.profileDialog,
                    isOpen: false
                }
            };
        case A.UPDATE_LOGIN_DIALOG:
            return {
                ...state,
                loginDialog: {
                    ...state.loginDialog,
                    credentials: {
                        ...state.loginDialog.credentials,
                        [action.payload.fieldName]: action.payload.value
                    },
                    validations: Stack()
                }
            };
        case A.CLOSE_LOGIN_DIALOG:
            return {
                ...state,
                loginDialog: {
                    ...state.loginDialog,
                    isOpen: false
                },
                profileDialog: {
                    ...state.profileDialog,
                    isOpen: false
                }
            };
        case API.events.profile.actionSuccess:
            return {
                ...state,
                profileDialog: {
                    ...state.profileDialog,
                    loggedUser: action.data.payload
                }
            };
        case A.LOGIN_SUCCESS:
            return {
                ...state,
                ...action.payload,
                loginDialog: {
                    ...state.loginDialog,
                    validations: Stack(),
                    isOpen: false
                }
            };
        case A.LOGIN_FAILURE:
            return {
                ...state,
                isFetching: action.payload.isFetching,
                isAuthenticated: action.payload.isAuthenticated,
                loginDialog: {
                    ...state.loginDialog,
                    validations: Stack(action.payload.validations)
                }
            };

        case API.events.jwtUpdate.actionSuccess:
            if (action.data.token) {
                localStorage.setItem('WWW-Token', action.data.token);
                localStorage.setItem('tm', 5000);
                return {
                    ...state,
                    isAuthenticated: true
                };
            } else {
                localStorage.clear();
                return {
                    ...state,
                    isAuthenticated: false
                };
            }
        case A.LOGIN_REQUEST:
            return {
                ...state,
                ...action.payload
            };
        case A.LOGOUT_REQUEST:
        case A.LOGOUT_SUCCESS:
            return {
                ...authState,
                ...action.payload
            };

        default:
            return state;
    }
}
