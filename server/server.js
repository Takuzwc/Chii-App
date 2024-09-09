const app = require("./app");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config({ path: "../config.env" });
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Welcome from back-end");
});

const startApp = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/chii-DB", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to mongoDB successfully");
  } catch (err) {
    console.error(`Error connecting to MongoDB: ${err}`);
  }
};

startApp();

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
