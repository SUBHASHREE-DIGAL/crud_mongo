// app.js
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/mydb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Middleware
app.use(bodyParser.json());

// Routes
const itemsRouter = require("./routes/items");
app.use("/items", itemsRouter);

// Start the server
const port = 3000;
app.listen(port, () =>
  console.log(`Server running on port http://localhost:${port}`)
);
