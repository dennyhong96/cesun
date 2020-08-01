const AppError = require("../utils/AppError");
const bodyFilter = require("../utils/bodyFilter");
const asyncHandler = require("../utils/asyncHandler");
const User = require("../model/User");

// @desc    Login
// @route   GET /api/v1/products
// @access  Public
exports.register = asyncHandler(async (req, res, next) => {
  const filteredBody = bodyFilter(
    req.body,
    "email",
    "firstName",
    "lastName",
    "address",
    "password",
    "confirmPassword"
  );

  const user = await User.create(filteredBody);
  res.status(200).json({
    status: "success",
    data: { token: user.genJwtToken() },
  });
});
