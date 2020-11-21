const express = require("express");
const DB = require("./db");

const router = express.Router();

router.get("/cars", async (req, res) => {
  try {
    let result = await DB.Car.all();
    res.json(result);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

module.exports = router;
