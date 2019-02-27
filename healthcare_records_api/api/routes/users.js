const express = require("express");
const router = express.Router();
const User = require("../../models/user");
const bcrypt = require("bcrypt");

router.post("/signin", (req, res, next) => {
  const payload = req.body;
  const { username, password } = payload;

  User.findOne({ username: username })
    .exec()
    .then(user => {
      if (user) {
        bcrypt.compare(password, user.password, (err, compareResult) => {
          if (err || !compareResult) {
            res.status(401).json({
              error: {
                message: "Username or password error"
              }
            });
          } else {
            res.status(200).json({
              _id: user._id,
              username: user.username,
              role: user.role
            });
          }
        });
      } else {
        console.log("User NOT FOUND");
        res.status(404).json({
          error: {
            message: `User ${username} NOT FOUND`
          }
        });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: {
          message: `Error when signing in user ${username}`
        }
      });
    });
});

module.exports = router;
