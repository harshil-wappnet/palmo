// loggedinReducer
const loggedinInitialState = {
    isLoggedIn: false,
    userData: {}
}

const loggedinReducer = (state = loggedinInitialState, action) => {
    switch (action.type) {
        case "loggedStatus":
            return {
                ...state,
                isLoggedIn: action.payload.isLoggedIn,
                userData: action.payload.userData,
            };
        case "ClearLoggedData":
            return {
                ...state,
                isLoggedIn: false,
                userData: {},
            };
        default:
            return state;
    }
}

export default loggedinReducer;
