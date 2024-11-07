import { useCart } from "../context/CartContext";

const Cart = () => {
    const {cart, removeFromCart} = useCart()

    if (cart.length === 0){
        return <div>Your cart is empty</div>
    }

    return (
        <div className="cart-page">
            <h2>Your Cart</h2>
            {cart.map((item) => (
                <div key={item.plantId._id} className="cart-item">
                    <h3>{item.plantId.name}</h3>
                    <p>Quantity: {item.quantity}</p>
                    <p>Price: R{item.plantId.price}</p>
                    <button onClick={() => removeFromCart(item.plantId._id)}>Remove</button>
                </div>
            ))}
        </div>
    )
}

export default Cart