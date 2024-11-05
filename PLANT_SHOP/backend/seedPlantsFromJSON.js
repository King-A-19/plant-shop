const mongoose = require('mongoose');
const Plant = require('./models/plantModel'); 
const plantsData = require('./plants.json'); 

mongoose.connect('mongodb+srv://root:0xPeybvXqK25Dlol@cluster0.7gup3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('Connection error:', err));

async function seedPlants() {
    try {
        await Plant.deleteMany({});
        console.log('Existing plants removed');

        for (const category of plantsData) {
            for (const plant of category.plants) {
                console.log('Seeding plant:', plant); // Log each plant before saving
                const newPlant = new Plant(plant);
                await newPlant.save();
            }
        }

        console.log('Seeding complete');
        mongoose.disconnect();
    } catch (error) {
        console.error('Seeding error:', error);
        mongoose.disconnect();
    }
}

seedPlants();
