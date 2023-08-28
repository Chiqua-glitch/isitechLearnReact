const express = require("express");

const app = express();

app.use(express.static(__dirname + "/public"));

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});

app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/public/pages/contact.html");
});

const bodyParser = require("body-parser");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const { MongoClient } = require("mongodb");

// Create Instance of MongoClient for mongodb
const client = new MongoClient("mongodb://127.0.0.1:27017/");

const db = client.db("User");

async function getData() {
  const data = await db.collection("users").find({}).toArray();

  app.engine("html", require("ejs").renderFile);

  app.get("/", function (req, res) {
    res.render(__dirname + "/public/pages/index.html", { data: data });
  });
}

getData();

// Connect to database
client
  .connect()
  .then(() => {
    console.log("Connected Successfully!");
  })
  .catch((error) => console.log("Failed to connect!", error));

// Connect to database

const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/User");

const userSchemas = new mongoose.Schema({
  name: String,
  email: String,
});

const User = mongoose.model("User", userSchemas);

app.use(express.json());

app.post("/", (req, res) => {
  let user = new User(req.body);
  user.save().catch((err) => console.log(err));

  res.redirect("/");
});
