const compression = require("compression");
const helmet = require("helmet");
const cors = require("cors");
const express = require("express");
const indicatorsRouter = require("./routes/indicators.route");

const app = express();

app.use(express.json());
app.use(compression());
app.use(helmet());
app.use(cors());

app.use("/api", indicatorsRouter);

app.all("*", async (req, res) => {
  throw new Error("route not found");
});

module.exports = app;
