const router = require("express").Router({ mergeParams: true });

const { createOrder } = require("../controller/orders");
const auth = require("../middlewares/auth");

router.route("/").post(auth, createOrder);

module.exports = router;
