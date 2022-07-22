import { LOGIN_USER, LOGOUT_USER } from "../actions/session_actions";

const sessionReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case LOGIN_USER:
            newState = Object.assign({currUserId: action.user.data.id});
            debugger
            return newState;
        case LOGOUT_USER:
            return {};
        default:
            return state;
    }
};

export default sessionReducer;