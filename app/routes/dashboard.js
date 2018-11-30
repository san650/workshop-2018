const express = require('express');
const { issueStore } = require('../models');

const router = express.Router();

router.get('/', function(req, res) {
  const openIssues = issueStore.getAllOpen();
  const openIssuesCount = openIssues.length;
  let highIssuesCount = 0;
  if (openIssuesCount > 0) {
    highIssuesCount =
      openIssues.filter(issue => issue.severity === 'High').length / openIssuesCount;
  }

  res.render('dashboard', {
    openIssuesCount,
    highIssuesCount
  });
});

module.exports = router;
