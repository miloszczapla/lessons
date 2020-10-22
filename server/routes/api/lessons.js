const mongodb = require("mongodb");
const express = require("express");

const router = express.Router();

//get lesons
router.get("/", (req,res) => {
    res.send("hello")
})
//add lessons


//delete lessons


module.exports = router
