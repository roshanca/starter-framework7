'use strict';

const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  console.log(req.body);
  res.json({
    errCode: 0,
    errMsg: ''
  });
});

module.exports = router;
