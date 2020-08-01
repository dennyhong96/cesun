const router = require("express").Router({ mergeParams: true });

const { createOrder, getOrders } = require("../controller/orders");
const auth = require("../middlewares/auth");
const forLevel = require("../middlewares/forLevel");

router
  .route("/")
  .get(auth, forLevel("PIONEER"), getOrders)
  .post(auth, forLevel("PIONEER"), createOrder);

module.exports = router;
