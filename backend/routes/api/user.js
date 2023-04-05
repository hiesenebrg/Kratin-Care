const express = require("express");
const router = express.Router();
const usercontoller = require("../../controllers/api/user");
router.post("/sign-up", usercontoller.signup);
router.post("/sign-in", usercontoller.createsession);
router.post("/update/:id", usercontoller.updateprofile);
router.use("/info", require("./info"));
module.exports = router;
