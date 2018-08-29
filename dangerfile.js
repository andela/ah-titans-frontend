import {
  danger, fail, message, warn
  ,
} from 'danger';

const jest = require('danger-plugin-jest').default;
// Exactly 1 reviewer is required.
const reviewersCount = danger.github.requested_reviewers.users.length;
if (reviewersCount === 0) {
  fail('🕵 Whoops, I don\'t see any reviewers. Remember to add one.');
} else if (reviewersCount > 1) {
  warn(
    `It's great to have ${reviewersCount} reviewers. Remember though that more than 1 reviewer may lead to uncertainty as to who is responsible for the review.`
  );
}

// Output all modified files in the PR
const modified = danger.git.modified_files;
message(`Changed Files in this PR: \n${modified.map(file => `- ${file}\n`)}`);

// Ensure the PR title contains a PT ticket key.

const prTitle = danger.github.pr.title;
const ticketPattern = /CL-\d+/g;
if (!ticketPattern.test(prTitle)) {
  fail(
    '🔍 I can\'t find the Pivotal Tracker ticket number in the PR title.'
  );
}

// Encourage smaller PRs
let errorCount = 0;
const bigPRThreshold = 600;
const thresholdErrorMessage = 'Pull Request size seems quite large. If the PR contains multiple changes, try splitting each change into a separate PR to aid faster, easier reviews.';
if (danger.github.pr.additions + danger.github.pr.deletions > bigPRThreshold) {
  warn(
    `:exclamation: PR is too big (${++errorCount}) - ${thresholdErrorMessage}`
  );
}

// PRs that remove more code than they add.
if (danger.github.pr.deletions > danger.github.pr.additions) {
  message(
    '👏 Great job! I see more lines deleted than added. Thanks for keeping us lean!'
  );
}

// Run jest test suites
jest();
