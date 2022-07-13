const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    return Object.assign({}, state);
}

export default usersReducer;