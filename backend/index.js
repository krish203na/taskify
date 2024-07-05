const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require("./db");
const http = require("http")
const cors = require("cors")
const {Server} = require("socket.io")

dotenv.config({ path: "./env" });

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({
    origin:process.env.CORS_ORIGIN
}))
app.use(express.urlencoded())

const server = http.createServer(app)
const io = new Server(server,{
    cors:{
        origin: process.env.CORS_ORIGIN
    }
})

connectDB()
    .then(() => {
        server.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));
        console.log("connection successfull")
        server.on("error", (error) => {
            console.log("error : ", error);
            throw error;
        })
    })
    .catch((err) => { console.log("Database not Connected !!!!", err) })
