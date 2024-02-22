export const Increment = (id) => {
    return {
        type: "Increment",
        payload: {
            itemId: id,
        }
    }
}

export const Decrement = (id) => {
    return {
        type: "Decrement",
        payload: {
            itemId: id,
        }
    }
}

export const loggedStatus = (isLoggedIn, userData) => {
    return {
        type: "loggedStatus",
        payload: {
            isLoggedIn,
            userData,
        }
    }
}

export const clearLoggedData = () => {
    return {
        type: "ClearLoggedData",
    };
};

const Actions = {
    Increment,
    Decrement,
    loggedStatus,
    clearLoggedData,
};
export default Actions;