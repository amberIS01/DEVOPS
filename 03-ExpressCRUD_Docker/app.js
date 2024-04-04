const express = require("express");
const mongoose = require("mongoose");

const postRoutes = require("./routes/postRoutes"); 
const {MONGO_IP, MONGO_PORT, MONGO_USER, MONGO_PASSWORD} = require("./config/config");

const app = express();
const mongoURL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;

mongoose.connect(
    mongoURL)
    .then(() => console.log("MongoDB started..."))
    .catch((e) => {console.log("Error :",e)});


app.get("/", (req, res) => {
    res.send("<h1>Hello from Node JS with Docker...</h1>");
});

app.enable("trust proxy");

//to handle json
app.use(express.json());

app.get("/api/v1", (req, res) => {
    res.send("<h1>Hello with nginx<h1>");
    console.log("Hello User...");
});

app.use("/api/v1/posts", postRoutes);


const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> {
    console.log("Server started at :",PORT);
});