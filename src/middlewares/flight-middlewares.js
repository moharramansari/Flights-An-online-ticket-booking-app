const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");
const AppError = require("../utils/errors/app-error");
const DateTimeCompare = require("../utils/helpers/datetime-helper");

function validateCreateRequest(req, res, next) {
  if (!req.body.flightNumber) {
    ErrorResponse.message = "Something went wrong while creating flight";
    ErrorResponse.error = new AppError(
      ["Flight Number not found in the oncoming request in the correct form"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  if (!req.body.airplaneId) {
    ErrorResponse.message = "Something went wrong while creating flight";
    ErrorResponse.error = new AppError(
      ["airplaneId not found in the oncoming request in the correct form"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  if (!req.body.departureAirportId) {
    ErrorResponse.message = "Something went wrong while creating flight";
    ErrorResponse.error = new AppError(
      [
        "departureAirportId not found in the oncoming request in the correct form",
      ],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  if (!req.body.arrivalAirportId) {
    ErrorResponse.message = "Something went wrong while creating flight";
    ErrorResponse.error = new AppError(
      [
        "arrivalAirportId not found in the oncoming request in the correct form",
      ],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  if (!req.body.arrivalTime) {
    ErrorResponse.message = "Something went wrong while creating flight";
    ErrorResponse.error = new AppError(
      ["arrivalTime not found in the oncoming request in the correct form"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  if (!req.body.departureTime) {
    ErrorResponse.message = "Something went wrong while creating flight";
    ErrorResponse.error = new AppError(
      ["departureTime not found in the oncoming request in the correct form"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  if (!req.body.price) {
    ErrorResponse.message = "Something went wrong while creating flight";
    ErrorResponse.error = new AppError(
      ["price not found in the oncoming request in the correct form"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  if (!req.body.totalSeats) {
    ErrorResponse.message = "Something went wrong while creating flight";
    ErrorResponse.error = new AppError(
      ["totalSeats not found in the oncoming request in the correct form"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  next();
}

function validateDateTime(req, res, next) {
  const flightArrivalTime = req.body.arrivalTime;
  const flightDepartureTime = req.body.departureTime;
  if (
    new Date(flightArrivalTime) == "Invalid Date" ||
    new Date(flightDepartureTime) == "Invalid Date"
  ) {
    ErrorResponse.message = "Failed to create a Flight";
    ErrorResponse.error = new AppError(
      ["Please enter the Departure Time OR Arrival Time format correctly"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!DateTimeCompare.compareTime(flightArrivalTime, flightDepartureTime)) {
    ErrorResponse.message = "Failed to create a Flight";
    ErrorResponse.error = new AppError(
      ["The Departure Time must be less than the Arrival Time"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  next();
}

function validatePrice(req, res, next) {
  const flightPrice = req.body.price;
  if (flightPrice < 0) {
    ErrorResponse.message = "Failed to create a Flight";
    ErrorResponse.error = new AppError(
      ["It is not possible to have a negative flight price"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  next();
}

function validateArrivalDestinationCodeReqBody(req, res, next) {
  if (req.body.arrivalAirportId == req.body.departureAirportId) {
    ErrorResponse.message = "Failed to create a Flight";
    ErrorResponse.error = new AppError(
      ["The Arrival Airport ID & Departure Airport ID cannot be same"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  next();
}

function validateArrivalDestinationCodeQueryParams(req, res, next) {
  if (req.query.trips) {
    [departureAirportId, arrivalAirportId] = req.query.trips.split("-");
    if (departureAirportId === undefined || arrivalAirportId === undefined) {
      ErrorResponse.message = "Failed to create a Flight";
      ErrorResponse.error = new AppError(
        ["Enter the Arrival Airport ID & Departure Airport ID correctly"],
        StatusCodes.BAD_REQUEST
      );
      return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }

    if (arrivalAirportId == departureAirportId) {
      ErrorResponse.message = "Failed to create a Flight";
      ErrorResponse.error = new AppError(
        ["The Arrival Airport ID & Departure Airport ID cannot be same"],
        StatusCodes.BAD_REQUEST
      );
      return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
  }
  next();
}

function validateUpdateSeatsRequest(req, res, next) {
  if (!req.body.seats) {
    ErrorResponse.message = "Something went wrong while creating flight";
    ErrorResponse.error = new AppError(
      ["seats not found in the incoming request in the correct form"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  next();
}

module.exports = {
  validateCreateRequest,
  validateDateTime,
  validatePrice,
  validateArrivalDestinationCodeReqBody,
  validateArrivalDestinationCodeQueryParams,
  validateUpdateSeatsRequest,
};
