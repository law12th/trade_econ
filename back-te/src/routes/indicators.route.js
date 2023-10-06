const {
  getCountries,
  getIndicators,
  getIndicatorData,
} = require("../controllers/indicators.controller");
const express = require("express");

const router = express.Router();

router.get("/countries", getCountries);
router.route("/indicators").get(getIndicators).post(getIndicatorData);

module.exports = router;
