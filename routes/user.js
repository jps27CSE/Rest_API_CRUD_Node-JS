const express = require("express");
const { v4: uuidv4 } = require("uuid");
const router = express.Router();

const user = [];

router.get("/", (req, res) => {
  res.send(user);
});

router.post("/", (req, res) => {
  const users = req.body;
  const userID = uuidv4();
  const userWithID = { ...users, id: userID };
  user.push(userWithID);
  res.send(
    `Registered with First Name : ${userWithID.firstName} Last Name : ${userWithID.lastName} Age : ${userWithID.age}`
  );
});

module.exports = router;
