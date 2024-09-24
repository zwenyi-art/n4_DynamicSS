const fs = require("fs");
const sslOptions = {
  key: fs.readFileSync(" /etc/letsencrypt/live/web.n4key.xyz/privkey.pem"),
  cert: fs.readFileSync("/etc/letsencrypt/live/web.n4key.xyz/fullchain.pem"),
};

module.exports = { sslOptions };
