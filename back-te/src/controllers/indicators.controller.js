const te = require("../config/te");
const countries = require("../utils/country-utils");

const getCountries = async (_, res) => {
  try {
    const countryList = Object.keys(countries).map((code) => ({
      code,
      name: countries[code],
    }));

    res.json(countryList);
  } catch (err) {
    console.error(`something went wrong: ${err.message}`);

    res.json(err.message);
  }
};

const getIndicators = async (_, res) => {
  try {
    te.getIndicatorData().then((data) => {
      res.json(data);
    });
  } catch (err) {
    console.error(err.message);

    res.json(err.message);
  }
};

const getIndicatorData = async (req, res) => {
  try {
    te.getIndicatorData(
      (country = req.body.country),
      (group = req.body.group)
    ).then((data) => {
      res.json(data);
    });
  } catch (err) {
    console.error(err.message);

    res.json(err.message);
  }
};

module.exports = {
  getCountries,
  getIndicators,
  getIndicatorData,
};
