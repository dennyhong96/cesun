const router = require("express").Router();

const {
  createProduct,
  getProducts,
  getProduct,
} = require("../controller/products");

router.route("/").get(getProducts).post(createProduct);
router.route("/:slug").get(getProduct);

module.exports = router;
