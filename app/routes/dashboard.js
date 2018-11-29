const express = require('express');
const { issueStore } = require('../models');

const router = express.Router();

router.get('/', function(req, res) {
  const openIssuesCount = issueStore.getAllOpen().length;

  res.render('dashboard', {openIssuesCount});
});

module.exports = router;
