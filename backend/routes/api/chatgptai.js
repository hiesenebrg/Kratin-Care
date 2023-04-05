const express = require("express");
const passport = require("passport");
const router = express.Router();
const chatgptcontroller = require("../../controllers/api/chatgptAPI");
router.post(
  "/prompt",
  
  chatgptcontroller.getapidata
);

module.exports = router;
