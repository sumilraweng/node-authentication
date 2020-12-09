const fs = require("fs");
const path = require("path");
const { User } = require("../model/userModel");
const bcrypt = require("bcryptjs");

const fileName = path.join(__dirname, "..", "data", "user.json");

const userEmailArray = JSON.parse(fs.readFileSync(fileName, "utf-8"));

module.exports.signUpUser = (req, res, next) => {
  let newUser = new User(req.body.email, req.body.password);
  userEmailArray.push(newUser);
  fs.writeFile(fileName, JSON.stringify(userEmailArray, null, 2), (err) => {
    if (err) {
      res.status(500).json({
        status: "unseecfull",
        message: "Internal status error",
      });
      return err;
    }
    res.status(200).json({
      status: "succesfull",
      data: newUser,
    });
  });
};

module.exports.login = (req, res, next) => {};

module.exports.logout = (req, res, next) => {};
