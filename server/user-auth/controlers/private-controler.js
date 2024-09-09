const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const token = req.header("auth-token");
  console.log("Received token:", token);
  if (!token) return res.status(401).send("Access Denied. No token provided.");

  try {
    const verified = jwt.verify(token, "secretKey");
    console.log("Verified user:", verified);
    req.user = verified;
    next();
  } catch (err) {
    console.error("Token verification failed:", err.message);
    res.status(400).send("Invalid Token");
  }
};
