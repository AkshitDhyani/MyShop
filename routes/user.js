const UserModel = require("../models/UserModel");
const {
  verifyToken,
  verifyAndAuthorize,
  verifyTokenAndAdmin,
} = require("./verifytoken");
const crypto = require("crypto-js");
const dotenv = require("dotenv");
dotenv.config();

const router = require("express").Router();

//UPDATE USER

router.put("/:id", verifyAndAuthorize, async (req, res) => {
  console.log("hey");
  if (req.body.password) {
    req.body.password = crypto.AES.encrypt(
      req.body.password,
      process.env.PASS_SECRET
    ).toString();
  }

  try {
    const updatedUser = await UserModel.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.send(updatedUser);
  } catch (err) {
    res.send(err);
  }
});

//DELETE USER

router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await UserModel.findByIdAndDelete(req.params.id);
    res.send("User has been deleted");
  } catch (error) {
    res.send(err);
  }
});

//GET USER

router.get("/:id", verifyAndAuthorize, async (req, res) => {
  console.log("getting user");
  try {
    const user = await UserModel.findById(req.params.id);
    console.log(user._doc);
    const { password, ...others } = user._doc;
    res.send({ ...others });
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
