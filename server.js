const express = require("express");

//rest object
const app = express();

//middleware
app.get("/test", (req, res) => {
  res.status(200).send("<h1>Hello nodejs</h1>");
});

//port
const PORT = 8080;

app.listen(PORT, () => {
  console.log("server is running");
});
