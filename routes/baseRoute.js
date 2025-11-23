const express = require("express");
const router = new express.Router();
const baseController = require("../controllers/baseController");
const utilities = require("../utilities/");

// Home route
router.get(
  "/",
  utilities.handleErrors(baseController.buildHome)
);

// ⭐ Intentional error test route
router.get(
  "/causeError",
  utilities.handleErrors(baseController.causeError)
);

module.exports = router;
