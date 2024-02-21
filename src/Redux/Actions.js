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

const Actions = {
    Increment,
    Decrement
};
export default Actions;