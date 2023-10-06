const config = require("./");
const te = require("tradingeconomics");

te.login(config.tradingEconomicsApiKey);

module.exports = te;
