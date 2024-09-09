const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.verifyLogin = async (req, res) => {
  // Authenticate user...
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Email not found");

  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send("Invalid password");

  // Create and sign the token
  const token = jwt.sign({ _id: user._id }, "secretKey");
  res.header("auth-token", token).send(token); // Send token in the response header
};
