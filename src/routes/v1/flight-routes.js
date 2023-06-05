const express = require("express");

const { FlightController } = require("../../controllers");
const { FlightMiddlewares } = require("../../middlewares");
const { updateSeats } = require("../../services/flight-service");

const router = express.Router();

// /api/v1/flight POST
router.post(
  "/",
  FlightMiddlewares.validateCreateRequest,
  FlightMiddlewares.validateDateTime,
  FlightMiddlewares.validatePrice,
  FlightMiddlewares.validateArrivalDestinationCodeReqBody,
  FlightController.createFlight
);

// // /api/v1/flight GET
// router.get("/", FlightController.getFlights);

// /api/v1/flight/:id GET
router.get("/:id", FlightController.getFlight);

//pagination
// /api/v1/flight/filter?trips =  GET
router.get(
  "/",
  FlightMiddlewares.validateArrivalDestinationCodeQueryParams,
  FlightController.getAllFlights
);


// /api/v1/flight/:id UPDATE
router.patch("/:id", FlightController.updateFlight);

router.patch(
  "/:id/seats",
  FlightMiddlewares.validateUpdateSeatsRequest,
  FlightController.updateSeats
);

// /api/v1/flight/:id DELETE
router.delete("/:id", FlightController.destroyFlight);

module.exports = router;
