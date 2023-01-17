import express from "express";

const router = express.Router();
const { lookUpUserIp, userLocator } = require("../controller/services");

router.get("/lookup/:secret", lookUpUserIp);
router.get("/:ip/:secret", userLocator);

export default router;
