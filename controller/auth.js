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

// @desc    Login
// @route   GET /api/v1/products
// @access  Public
exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  // Handle missing fields
  if (!(email && password)) {
    return next(new AppError("Password and email are required.", 400));
  }

  // Handle user not found
  if (!user) {
    return next(new AppError("User not found, please sign up.", 404));
  }

  // Handler user pssword incorrect
  if (!(await user.correctPassword(password))) {
    return next(new AppError("Password incorrect, please try again.", 401));
  }

  res.status(200).json({
    status: "success",
    data: { token: user.genJwtToken() },
  });
});
