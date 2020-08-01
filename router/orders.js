const router = require("express").Router({ mergeParams: true });

const { createOrder } = require("../controller/orders");
const auth = require("../middlewares/auth");
const forLevel = require("../middlewares/forLevel");

router.route("/").post(auth, forLevel("PIONEER"), createOrder);

module.exports = router;
