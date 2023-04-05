const express = require("express");
const { JsonWebTokenError } = require("jsonwebtoken");
const passport = require("passport");
const router = express.Router();
const infocontoller = require("../../controllers/api/info");
router.post(
  "/create",
 
  infocontoller.info
);
router.post(
  "/getinfo",
  
  infocontoller.getinfo
);
module.exports = router;
