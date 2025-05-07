require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const app = express();
const port = 3000;
const goalRouter = require("./routes/goalRouter");

// middleware they are function that runs on the server between the request and responses
app.use(express.json()); // parse json data
app.use(cors())


// home route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to GOAL api",
  });
});

app.use("/goals", goalRouter);

// error route
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Resource not found",
  }); 
});

const connectToDb = async () => {
  try {
    // db connection logic
    await mongoose.connect(process.env.MONGO_URI, {
        dbName: "goals",
    });
    app.listen(port, () => {
      console.log(`server running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
connectToDb();
