const fs = require("fs");
let users = require("../data/users.json");
const path = require("path");
const mongoose = require("mongoose");


const updateUsers = path.join(__dirname, "../data/users.json");

function saveDataToJsonFile(users) {
  fs.writeFileSync(updateUsers, JSON.stringify(users, null, 2));
}

exports.createUser = (req, res) => {
  const user = req.body;
  users.push(user);
  saveDataToJsonFile(users);
  res.send(`User ${user.name} added to database`);
};

exports.getUsers = (req, res) => {
  res.send(users);
};

exports.deleteUser = (req, res) => {
  const id = parseInt(req.params.id);
  users = users.filter((user) => parseInt(user.id) !== id);
  saveDataToJsonFile(users);
  res.send(`User ${id} deleted`);
};

exports.updateUser = (req, res) => {
  const id = parseInt(req.params.id);
  const userToUpdate = users.find((user) => parseInt(user.id) == id);
  const { name, lname, age } = req.body;
  if (name) {
    userToUpdate.name = name;
  }
  if (lname) {
    userToUpdate.lname = lname;
  }
  if (age) {
    userToUpdate.age = age;
  }
  saveDataToJsonFile(users);
  res.send(`User ${id} has been updated`);
};
exports.getUser = (req, res) => {
  const id = parseInt(req.params.id);
  const findUser = users.find((user) => parseInt(user.id) == id);
  res.send(findUser);
};
