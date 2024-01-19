const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const mySqlPool = require("./config/db");

dotenv.config();
//rest object
const app = express();

//middleware
app.use(express.json());
app.use(morgan("dev"));

app.get("/test", (req, res) => {
  res.status(200).send("<h1>Hello nodejs with sql</h1>");
});

//port
const PORT = process.env.PORT || 8080;

//conditionaly listen
mySqlPool
  .query("SELECT 1")
  .then(() => {
    //mysql
    console.log("db connected");
    //listen
    app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
