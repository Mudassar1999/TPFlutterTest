const express = require("express");
const router = express.Router();
const data = require("../../../../data.json");

router.route("/").get(async (req, res) => {
  try {
    res.status(200).json(data);
  } catch (error) {
    throw error;
  }
});
module.exports = router;
