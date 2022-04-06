const express = require('express');

const router = express.Router();

router
  .route('/')
  /**
   * POST /
   * @summary Test API connection
   * @tags TEST
   */
  .get((_, res) => { res.send('API is working'); });

module.exports = router;
