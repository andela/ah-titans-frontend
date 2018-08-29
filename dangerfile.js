/**
 * BEFORE EDITING THIS FILE, PLEASE READ http://danger.systems/js/usage/culture.html
 *
 * This file is split into two parts:
 * 1) Rules that require or suggest changes to the code, the PR, etc.
 * 2) Rules that celebrate achievements
 */
import {
  danger, fail, message, warn,
} from 'danger';

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* ~ Required or suggested changes                                          ~ */
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

/**
 * Rule: Exactly 1 reviewer is required.
 * Reason: No reviewer tends to leave a PR in a state where nobody is
 *         responsible. Similarly, more than 1 reviewer doesn't clearly state
 *         who is responsible for the review.
 */
const reviewersCount = danger.github.requested_reviewers.users.length;
if (reviewersCount === 0) {
  fail('🕵 Whoops, I don\'t see any reviewers. Remember to add one.');
} else if (reviewersCount > 1) {
  warn(
    `It's great to have ${reviewersCount} reviewers. Remember though that more than 1 reviewer may lead to uncertainty as to who is responsible for the review.`
  );
}

/**
 * Rule: Ensure the PR title contains a Jira ticket key.
 * Reason: When looking at the list of PRs, seeing the Jira ticket in the PR
 *         title makes it very efficient to know what to look at.
 */
const prTitle = danger.github.pr.title;
const ticketPattern = /CL-\d+/g;
if (!ticketPattern.test(prTitle)) {
  fail(
    '🔍 I can\'t find the Jira ticket number in the PR title. Your team members are going to thank you when they look at the list of PRs on Github and see at a glance which PR belongs to which Jira ticket 🙏.'
  );
}

/**
 * Rule: Ensure the PR body contains a link to the Jira ticket.
 * Reason: It's the most efficient way to jump from Github to Jira to update the
 *         ticket.
 */
const prBody = danger.github.pr.body;
const ticketUrlPattern = /https:\/\/vclabs\.atlassian\.net\/browse\/CL-(\d+)/g;
if (!ticketUrlPattern.test(prBody)) {
  fail(
    '🔍 I can\'t find the Jira ticket URL in the PR body. Please add a link to the Jira ticket, it\'s the most efficient way to jump to the corresponding ticket in Jira 🏎'
  );
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* ~ Achievemnts                                                            ~ */
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

/**
 * Rule: Celebrate PRs that remove more code than they add.
 * Reason: Less is more!
 */
if (danger.github.pr.deletions > danger.github.pr.additions) {
  message(
    '👏 Great job! I see more lines deleted than added. Thanks for keeping us lean!'
  );
}
