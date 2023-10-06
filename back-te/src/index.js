const config = require("./config");
const app = require("./app");

const start = async () => {
  app
    .listen(config.port, () => {
      console.log(`listening on port ${config.port}`);
    })
    .on("error", (err) => {
      console.error(`error listening on port ${config.port}: ${err.message}`);
    });
};

start();
