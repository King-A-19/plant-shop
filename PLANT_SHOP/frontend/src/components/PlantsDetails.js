const PlantsDetails = ({plant}) =>{
    return (
        <div className="plant-list">
            <h2>{plant.name}</h2>
            <img src={plant.imageUrl} alt={plant.name} />
            <p>{plant.description}</p>
            <p>Price: R{plant.price}</p>
            <button>Add to Cart</button>
            </div>
    )
}
export default PlantsDetails