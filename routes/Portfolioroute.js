const express = require("express");
const { sendemailcontroller } = require("../controllers/Portfoliocontroller");

//rouet object
const router = express.Router();

//routes
router.post("/sendEmail", sendemailcontroller);

module.exports = router;
