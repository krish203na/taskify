const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${process.env.DB_NAME}`)
        console.log("connected")
    }
    catch (error) {
        console.log("database connection error", error);
        process.exit(1)
    }
}

module.exports = connectDB