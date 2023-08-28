const express = require("express");
const app = express();

app.use(express.static(__dirname));

const cookieSession = require("cookie-session");

app.use(
    cookieSession({
        name: "test",
        keys: ["COOKIE_SECRET"],
        httpOnly: true
    })
)

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, () => {
  app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
  });
});

const mongoose = require("mongoose");
const uuid = require("uuid");

mongoose.connect("mongodb://127.0.0.1/User");

const userShemas = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", userShemas);

app.post("/register", (req, res) => {
  let user = new User(req.body);
  user.save();
  res.redirect("/");
});
