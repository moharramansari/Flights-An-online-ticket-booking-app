const { StatusCodes } = require("http-status-codes");

function validateCreateRequest(req, res, next) {
  if (!req.body.modelNumber) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: "Something went wrong while creating airplace",
      data: {},
      error: { explanation: "Model number not found in the uncomin" },
    });
  }
  next();
}

module.exports = { validateCreateRequest };
