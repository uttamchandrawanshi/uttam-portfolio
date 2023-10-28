const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

//dotenv configuration
dotenv.config();

//rest object
const app = express();

//midleware
app.use(cors());
app.use(express.json());

//static file
app.use(express.static(path.join(__dirname, "./client/build")));

//routes
app.use("/api/v1/portfolio", require("./routes/Portfolioroute"));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
//Port
const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT, () => {
  console.log(`server run on PORT ${PORT}`);
});
