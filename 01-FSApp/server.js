const express = require("express");
const app = express();
const PORT = 9999;

app.get("/", (request, response) => {
    response.send("Hello World Using Express");
});

app.listen(PORT, () => console.log("Server Started at :",PORT));