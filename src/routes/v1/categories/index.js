const express = require("express");
const router = express.Router();
const category = require("./categories.routes");
const categoryRoutes = [
  {
    path: "/category",
    route: category,
  },
];
categoryRoutes.forEach((route) => {
  router.use(route.path, route.route);
});
module.exports = router;
