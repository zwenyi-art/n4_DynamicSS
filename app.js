const express = require("express");
const dynamic_ss_gen = require("./generator/dynamic_ss_gen");
const { sslOptions } = require("./config/ssl_option");
const app = express();
const PORT = 5000;
const https = require("https");

app.use(express.static("./public"));
app.get("/ss", dynamic_ss_gen);

const start = async () => {
  try {
    https.createServer(sslOptions, app).listen(PORT, () => {
      console.log("server running on port ", PORT);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
