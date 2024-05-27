const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv/config");

const cors = require("cors");
const { default: mongoose } = require("mongoose");

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => {
  return res.json("I am David Komolafe I reside in abuja");
});

// user authentication route
const userRoute = require("./routes/auth");
app.use("/api/users/", userRoute);

// artist route
const userRoute = require("./routes/artists");
app.use("/api/users/", userRoute);

// albums route
const userRoute = require("./routes/albums");
app.use("/api/users/", userRoute);

mongoose.connect(
  "mongodb+srv://Ruach:" +
    process.env.MONGO_PASSWORD +
    "@ruach.7m8rbhs.mongodb.net/?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);
mongoose.connection
  .once("open", () => console.log("Connected"))
  .on("error", (error) => {
    console.log(`ERROR : ${error}`);
  });

app.listen(4000, () => console.log("Listening to port 4000"));
