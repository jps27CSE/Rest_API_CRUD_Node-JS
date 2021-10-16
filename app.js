let express = require("express");
let bodyParser = require("body-parser");

const app = express();
const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server is Running on PORT${PORT}`);
});

app.get("/", (req, res) => {
  res.send("<h1>Hello Jack</h1>");
});
