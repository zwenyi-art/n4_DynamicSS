const fs = require("fs");
const sslOptions = {
  key: fs.readFileSync("/etc/n4/stunnel.pem"),
  cert: fs.readFileSync("/etc/n4/stunnel.pem"),
};

module.exports = { sslOptions };
