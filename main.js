import * as core from '@actions/core';
import * as github from '@actions/github';

const token = core.getInput('token', { required: true });
const body = core.getInput('body', { required: true });

const [repoOwner, repoName] = process.env.GITHUB_REPOSITORY.split('/');

const prNum = github.context.payload.pull_request.number;

const octokit = github.getOctokit(token);

await octokit.rest.pulls.update({
  owner: repoOwner,
  repo: repoName,
  body: body,
  pull_number: prNum,
});
