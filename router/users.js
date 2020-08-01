const router = require("express").Router();

const auth = require("../middlewares/auth");
const { updateUser } = require("../controller/users");

router.route("/").patch(auth, updateUser);

module.exports = router;
