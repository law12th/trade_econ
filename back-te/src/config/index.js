require("dotenv").config();

const config = {
  tradingEconomicsApiKey: process.env.TRADING_ECONOMICS_API_KEY,
  port: process.env.PORT,
};

module.exports = config;
