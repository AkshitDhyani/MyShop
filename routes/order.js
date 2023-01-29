const OrderModel = require("../models/OrderModel");
const {
  verifyToken,
  verifyAndAuthorize,
  verifyTokenAndAdmin,
} = require("./verifytoken");

const router = require("express").Router();

//CREATE

router.post("/", verifyToken, async (req, res) => {
  const cart = new OrderModel({
    title: req.body.title,
    price: req.body.price,
    image: req.body.image,
    category: req.body.category,
    dimension: req.body.dimension,
    thickness: req.body.thickness,
    color: req.body.color,
  });
  try {
    const savedProduct = await product.save();
    res.send(savedProduct);
  } catch (err) {
    res.send(err);
  }
});

//UPDATE

router.put("/:id", verifyAndAuthorize, async (req, res) => {
  try {
    const cart = await CartModel.findByIdAndUpdate(req.params.id);
    console.log(cart._doc);
    res.send(cart._doc);
  } catch (error) {
    res.send(error);
  }
});

//DELETE

router.delete("/:id", verifyAndAuthorize, async (req, res) => {
  try {
    await CartModel.findByIdAndDelete(req.params.id);
    res.send("Cart item has been deleted");
  } catch (error) {
    res.send(err);
  }
});

//GET CART

router.get("/:userId", verifyAndAuthorize, async (req, res) => {
  try {
    const cart = await CartModel.findOne({ userId: req.params.UserId });
    console.log(cart._doc);
    res.send(cart._doc);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
