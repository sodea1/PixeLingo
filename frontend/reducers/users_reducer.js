import { CREATE_USER } from "../actions/session_actions";

const usersReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case CREATE_USER:
            let newState = Object.assign({}, state, action.user.data);
            return newState;
        default:
            return state;
    }
};

export default usersReducer;