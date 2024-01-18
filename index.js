const app = require("./app");
const config = require("./src/config/env__config");
const { expressServer } = require("./src/config/server");

// Server Started
expressServer(config.port, app);
