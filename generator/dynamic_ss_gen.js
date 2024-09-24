const ss_key = require("../config/ss_key.json");
const dynamic_ss_gen = (req, res) => {
  res.status(200).json(ss_key);
};
module.exports = dynamic_ss_gen;
