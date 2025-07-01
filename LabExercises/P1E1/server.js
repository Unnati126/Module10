const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello from Dockerized Node.js App - Tested & Updated!");
});

app.listen(PORT, () => {
    console.log('Server running on port ${port}');
});