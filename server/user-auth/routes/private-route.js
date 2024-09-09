const router = require("express").Router();
const verify = require("../controlers/private-controler");

router.get("/protected", verify, (req, res) => {
  res.json({
    message: "You have access to this protected route!",
    user: req.user, // You can access the decoded token payload here
  });
});

module.exports = router;
