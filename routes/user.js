const express = require("express");

const router = express.Router();

const user = [
  {
    firstName: "Jack",
    lastName: "Pritom",
    Age: 23,
  },
  {
    firstName: "Partho",
    lastName: "Ponuel",
    Age: 27,
  },
];

router.get("/", (req, res) => {
  console.log("i am in users");
  res.send(user);
});

router.post("/", (req, res) => {
  console.log("route reached");
});

module.exports = router;
