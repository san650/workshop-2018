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

  let mediumIssuesCount = 0;
  if (openIssuesCount > 0) {
    mediumIssuesCount =
      openIssues.filter(issue => issue.severity === 'Medium').length / openIssuesCount;
  }

  res.render('dashboard', {
    openIssuesCount,
    highIssuesCount,
    mediumIssuesCount
  });
});

module.exports = router;
