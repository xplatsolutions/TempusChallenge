const mongoose = require('mongoose');
const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan("dev"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

mongoose.connect(
  process.env.MONGOURL,
  {
    useNewUrlParser: true
  }
);

// const ObjectId = (rnd = r16 => Math.floor(r16).toString(16)) =>
//     rnd(Date.now() / 1000) + ' '.repeat(16).replace(/./g, () => rnd(Math.random() * 16));
// console.log(ObjectId());

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("Connected to DB");
});

// Allow CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Header",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  if (req.method == "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, PATCH, DELETE");
    return res.status(200).json({});
  }

  next();
});

// App routes before error handling middlewares
const patientsRoutes = require("./api/routes/patients");
const usersRoutes = require("./api/routes/users");

app.use("/patients", patientsRoutes);
app.use("/users", usersRoutes);

// Handle 404 no route found
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

// Handle all errors or forward an error to response
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;
