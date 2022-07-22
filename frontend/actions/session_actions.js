import * as SessionApiUtil from "../util/session_api_util";

export const CREATE_USER = 'CREATE_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

const createUser = (user) => {
    return ({
        type: CREATE_USER,
        user
    });
};

const loginUser = (user) => {
    debugger
    return ({
        type: LOGIN_USER,
        user
    });
};

const logoutUser = (user) => {
    return ({
        type: LOGOUT_USER,
        user
    })
}

export const signup = user => dispatch => {
    return SessionApiUtil.signup(user)
        .then((res) => dispatch(createUser(res)));
};

export const login = user => dispatch => {
    debugger
    return SessionApiUtil.login(user)
        .then(res => dispatch(loginUser(res)));
};

export const logout = user => dispatch => {
    return SessionApiUtil.logout(user)
        .then(res => dispatch(logoutUser(res)));
};