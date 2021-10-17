const express = require("express");
const bodyParser = require("body-parser");
const userRoute = require("./routes/user.js");

const app = express();
const PORT = 8080;

app.use(bodyParser.json());

app.use("/users", userRoute);

app.get("/", (req, res) => {
  res.send("<h1>Hello Jack</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is Running on PORT${PORT}`);
});
