const express = require("express");
const router = express.Router();
router.use("/user", require("./user"));
router.use("/getdata", require("./chatgptai"));
module.exports = router;
