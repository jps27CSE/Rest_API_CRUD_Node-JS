const {
  GetUsers,
  PostUser,
  GetSpecificUser,
  DeleteUser,
  UpdateUser,
} = require("../controllers/user");
const express = require("express");

const router = express.Router();

router.get("/", GetUsers);

router.post("/", PostUser);

router.get("/:id", GetSpecificUser);

router.delete("/:id", DeleteUser);

router.post("/:id", UpdateUser);

module.exports = router;
