const express = require('express');
const router = express.Router();
const needle = require('needle');

//Environment Variables
const API_BASE_URL = process.env.API_BASE_URL;
const API_KEY_NAME = process.env.API_KEY_NAME;
const API_KEY_VALUE = process.env.API_KEY_VALUE;

//Create Routes
router.get('/', async (req, res, next) => {
  try {
    const params = new URLSearchParams({
      [URL_KEY_NAME]: API_KEY_VALUE,
    });

    const apiResponse = await needle('get', `${API_BASE_URL}?${params}`);
    const data = apiResponse.body;

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
