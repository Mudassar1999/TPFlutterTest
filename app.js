const express = require("express");
const cors = require("cors");
const routes = require("./src/routes/v1/index.js");
const helmet = require("helmet");
const compression = require("compression");

const app = express();
const httpStatus = require("http-status");

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// enable cors
app.use(cors());
// Whitelisted URL's
app.options("*", cors());

// set security HTTP headers
app.use(helmet());
// gzip compression
app.use(compression());

// v1 api routes
app.use("/", routes);

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  next(new ApiNotFoundError(httpStatus.NOT_FOUND, req.url + " " + "Not found"));
});

// Create a new Session

module.exports = app;
