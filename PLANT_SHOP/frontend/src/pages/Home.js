import {useEffect, useState} from 'react'

//componets
import PlantsDetails from '../components/PlantsDetails'

const Home = () => {
    const [plants, setPlants] = useState(null)

    useEffect(() => {
        const fetchPlants = async () => {
            const response = await fetch('/api/plants')
            const json = await response.json()

            if (response.ok){
                setPlants(json)
            }
        }

        fetchPlants()
    }, [])
    return (
        <div className="home">
           <div className="plants">
            {plants && plants.map((plant) => (
                <PlantsDetails key={plant._id} plant={plant} />
            ))}
            </div> 
        </div>
    )
}

export default Home