const router = require("express").Router({ mergeParams: true });

const { createOrder } = require("../controller/orders");

router.route("/").post(createOrder);

module.exports = router;
