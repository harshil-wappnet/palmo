const initialState = {
    itemCounts: {}, // Use an object to store counts for each item
}

const countReducer = (state = initialState, action) => {
    switch (action.type) {
        case "Increment":
            const itemId = action.payload.itemId;
            const currentCount = state.itemCounts[itemId] || 0;
            return {
                ...state,
                itemCounts: {
                    ...state.itemCounts,
                    [itemId]: currentCount + 1,
                }
            };
        case "Decrement":
            const itemIdDecrement = action.payload.itemId;
            const currentCountDecrement = state.itemCounts[itemIdDecrement] || 0;
            return {
                ...state,
                itemCounts: {
                    ...state.itemCounts,
                    [itemIdDecrement]: Math.max(0, currentCountDecrement - 1), // Ensure count doesn't go below 0
                }
            };
        default: return state
    }
}

export default countReducer;