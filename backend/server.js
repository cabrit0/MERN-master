const express = require("express");
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const colors = require("colors");
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 5000;

connectDB();
const app = express();

//choose type of parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/goals", require("./routes/goalRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler);

app.listen(PORT, () => console.log(`listening on ${PORT}`));
