const express = require("express");

const dotenv = require("dotenv");
dotenv.config();

const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");

const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database connected Successfully"))
  .catch((err) => console.log(err));

if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));
}

app.listen(PORT, () => {
  console.log("Backend Server is running");
});

app.use("/api/user", userRoute);

app.use("/api/auth", authRoute);
app.use("/api/product", productRoute);
