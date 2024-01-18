const express = require("express");
const router = express.Router();

const categories = require("./categories");

const BASE_URL = require("../../../src/global/baseUri");

router.use(BASE_URL.BASE_URI, categories);

module.exports = router;
