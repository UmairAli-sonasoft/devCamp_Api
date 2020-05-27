/** @format */

const express = require("express");
const dotenv = require("dotenv").config({
  path: `${__dirname}/config/config.env`,
});

const app = express();

const PORT = process.env.PORT;

app.listen(5000, () => {
  console.log(`App listening in ${process.env.NODE_ENV} on port ${PORT}!`);
});
