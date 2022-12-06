const express = require("express");
const router = express.Router();

const { lookUpUserIp, userLocator } = require("../controller/services");

router.get("/lookup/:secret", lookUpUserIp);
router.get("/:ip/:secret", userLocator);

module.exports = router;
