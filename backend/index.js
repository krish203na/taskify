const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require("./db")

dotenv.config({path : "./env"});

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

connectDB()

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));
