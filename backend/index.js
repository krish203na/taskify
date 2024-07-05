// backend/index.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(`${process.env.MONGO_URI}/taskify`)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err + "not connected"));

// Routes
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
