const router = require("express").Router();
const User = require("../models/UserModel");
const jwt = require("jsonwebtoken");
const crypto = require("crypto-js");
const dotenv = require("dotenv");
dotenv.config();

//Register
router.post("/register", async (req, res) => {
  const newUser = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    username: req.body.username,
    email: req.body.email,
    password: crypto.AES.encrypt(
      req.body.password,
      process.env.PASS_SECRET
    ).toString(),
  });
  try {
    const savedUser = await newUser.save();
    res.status(200).json({ ...savedUser._doc });
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  console.log("LOGGIN USER");
  console.log(req.body.email);

  console.log(req.body.password);
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      res.status(401).json("User not found");
    } else {
      const hashedPass = crypto.AES.decrypt(
        user.password,
        process.env.PASS_SECRET
      );
      const pass = hashedPass.toString(crypto.enc.Utf8);

      if (pass !== req.body.password) {
        res.status(401).json("Wrong Password");
      } else {
        const webToken = jwt.sign(
          {
            id: user._id,
            isadmin: user.isadmin,
          },
          process.env.JWT_SECRET,
          { expiresIn: "3d" }
        );
        const { password, ...others } = user._doc;
        res.status(200).json({ ...others, webToken });
      }
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
