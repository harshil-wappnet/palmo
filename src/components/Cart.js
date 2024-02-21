import { useSelector } from "react-redux"
function Cart() {
    const itemCounts = useSelector(state => state.itemCounts);

    // Calculate the total quantity by summing up individual item counts
    const totalQuantity = Object.values(itemCounts).reduce((total, count) => total + count, 0);
    return (
        <div>
            <h2>Total Quantity Added to Cart: {totalQuantity} </h2>

            {/* If you want to display individual item quantities, you can map through the items */}
            {/* For example, assuming you have an array of items with unique IDs: */}
            {Object.entries(itemCounts).map(([ItemId, count]) => (
                <div key={ItemId}>
                    <p>Item ID: {ItemId}</p>
                    <p>Quantity: {count}</p>
                </div>
            ))}
        </div>
    )
}

export default Cart
