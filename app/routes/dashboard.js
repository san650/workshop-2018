const express = require('express');
const { issueStore } = require('../models');

const router = express.Router();

router.get('/', function(req, res) {
  const openIssues = issueStore.getAllOpen();
  const openIssuesCount = openIssues.length;
  const highIssuesCount = calculatePercentage(openIssues, "High");
  const mediumIssuesCount = calculatePercentage(openIssues, "Medium");

  res.render('dashboard', {
    openIssuesCount,
    highIssuesCount,
    mediumIssuesCount
  });
});

function calculatePercentage(issues, severity) {
  let percentage = 0;

  if (issues.length > 0) {
    percentage =
      issues.filter(issue => issue.severity === severity).length / issues.length;
  }

  return percentage;
}

module.exports = router;
