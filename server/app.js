const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");

const registerRoute = require("./user-auth/routes/auth-register-route.js");
const loginRoute = require("./user-auth/routes/auth-login-route.js");
const protectedRoute = require("./user-auth/routes/private-route.js");

if (process.env.NODE_ENV === "development") {
  app.request(morgan(dev));
}

app.use(express.json());
app.use(bodyParser.json());

app.use("/api/auth", registerRoute);
app.use("/api/auth", loginRoute);
app.use("/api/", protectedRoute);
module.exports = app;
