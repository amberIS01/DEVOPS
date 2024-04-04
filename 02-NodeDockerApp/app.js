const express = require("express");
const mongoose = require("mongoose");
const {MONGO_IP, MONGO_PORT, MONGO_USER, MONGO_PASSWORD} = require("./config/config");

const app = express();
const mongoURL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;

mongoose.connect(
    // "mongodb://root:root@192.168.112.2:27017/?authSource=admin")
    // "mongodb://root:root@mongo:27017/?authSource=admin")
    mongoURL)
    .then(() => console.log("MongoDB started..."))
    .catch((e) => {console.log("Error :",e)});


app.get("/", (req, res) => {
    res.send("<h1>Hello from Node JS with Docker...</h1>");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> {
    console.log("Server started at :",PORT);
});