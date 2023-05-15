const express = require("express");

const { CityController } = require("../../controllers");
const { CityMiddlewares } = require("../../middlewares");

const router = express.Router();

// /api/v1/city POST
router.post(
  "/",
  CityMiddlewares.validateCreateRequest,
  CityController.createCity
);

// /api/v1/cities GET
router.get("/", CityController.getCitys);

// /api/v1/city/:id GET
router.get("/:id", CityController.getCity);

// /api/v1/city/:id UPDATE
router.patch("/:id", CityController.updateCity);

// /api/v1/city/:id DELETE
router.delete("/:id", CityController.destroyCity);

module.exports = router;
