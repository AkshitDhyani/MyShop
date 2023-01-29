const ProductModel = require("../models/ProductModel");
const {
  verifyToken,
  verifyAndAuthorize,
  verifyTokenAndAdmin,
} = require("./verifytoken");

const router = require("express").Router();

//CREATE

router.post("/new", verifyTokenAndAdmin, async (req, res) => {
  const product = new ProductModel({
    title: req.body.title,
    price: req.body.price,
    image: req.body.image,
    category: req.body.category,
    dimension: req.body.dimension,
    thickness: req.body.thickness,
    color: req.body.color,
    shape: req.body.shape,
    material: req.body.material,
    resistance: req.body.resistance,
    weight: req.body.weight,
    glass: req.body.glass,
    lug: req.body.lug,
  });
  try {
    const savedProduct = await product.save();
    res.send(savedProduct);
  } catch (err) {
    res.send(err);
  }
});

router.get("/:id", async (req, res) => {
  console.log("getting user");
  try {
    const product = await ProductModel.findById(req.params.id);
    console.log(product._doc);
    res.send(product._doc);
  } catch (error) {
    res.send(error);
  }
});

router.get("/", async (req, res) => {
  console.log("inside products");
  const qNew = req.query.new;
  const qcategory = req.query.category;
  try {
    let products;
    if (qNew) {
      products = await ProductModel.find().limit(8);
    } else if (qcategory) {
      products = await ProductModel.find({ category: qcategory }).limit(5);
    } else {
      products = await ProductModel.find();
    }
    console.log(products);
    res.send(products);
  } catch (error) {}
});

module.exports = router;
