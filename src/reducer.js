const preloadedState = { name: "", secondName: "", age: null };

const reducer = (state, { type, payload }) => {
    switch (type) {
        case "CHANGE_NAME":
            return {
                ...state,
                name: payload,
            };
        case "CHANGE_SECOND":
            return {
                ...state,
                secondName: payload,
            };
        case "CHANGE_AGE":
            return {
                ...state,
                age: +payload,
            };
        default:
            return state;
    }
}
export { reducer, preloadedState };

