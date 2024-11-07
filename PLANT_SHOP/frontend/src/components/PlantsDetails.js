import { useCart } from "../context/CartContext"

const PlantsDetails = ({plant}) =>{
    const {addToCart} = useCart()

    const handleAddToCart = () => {
        addToCart(plant._id)
    }

    return (
        <div className="plant-list">
            <h2>{plant.name}</h2>
            <img src={plant.imageUrl} alt={plant.name} />
            <p>{plant.description}</p>
            <p>Price: R{plant.price}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
    )
}
export default PlantsDetails