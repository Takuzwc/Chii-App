const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { response } = require("../../app");

exports.createUser = async (req, res) => {
  const emailExists = await User.findOne({ email: req.body.email });
  if (emailExists) return res.status(400).json({ msg: "Email already exists" });

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });

  try {
    const savedUser = await user.save();
    // res.status(200).json({
    //   msg: "User registered successfully",
    //   user: savedUser._id,
    // });
    res.send({ user: user._id });
  } catch (err) {
    res.status(400).send(err);
    console.log(err);
  }
};
