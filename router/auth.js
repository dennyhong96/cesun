const router = require("express").Router();

const { register } = require("../controller/auth");

router.route("/register").post(register);

module.exports = router;
