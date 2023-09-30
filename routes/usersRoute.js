// import express from "express";
// import { v4 as uuidv4 } from "uuid";
const express = require("express");

const {
  createUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
} = require("../controllers/users.js");

// const users = fs.readFileSync("user.json", "utf8");
// const jsonData = JSON.parse(users);

const router = express.Router();

router.get("/", getUsers);
router.post("/", createUser);
router.get("/:id", getUser);
router.delete("/:id", deleteUser);
router.patch("/:id", updateUser);

module.exports = router;
