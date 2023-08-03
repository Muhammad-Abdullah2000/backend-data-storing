const express = require("express");
const { HelloFunction } = require("../controllers/Hello.js");
const router = express.Router();
const { validateUser } = require('../utils/Validations.js');



router.route("/hello").post(validateUser, HelloFunction);


module.exports = router;