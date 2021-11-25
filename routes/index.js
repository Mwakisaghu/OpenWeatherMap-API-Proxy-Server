const express = require('express');

const router = express.Router();

//Create Routes
router.get('/', (req, res, next) => {
  res.json({ success: true });
});

module.exports = router;
