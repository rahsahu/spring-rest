jobs:
  myJob:
    runs-on: ubuntu-latest
    steps:
      - name: Use my reusable action
        uses: your-username/your-action-repo@v1
        with:
          myInput: 'some value'


name: 'My Reusable Action'
description: 'An example of a reusable GitHub Action'
inputs:
  myInput:
    description: 'An example input'
    required: true
    default: 'default value'
runs:
  using: 'node12'
  main: 'index.js'


// index.js

const core = require('@actions/core');

try {
  const myInput = core.getInput('myInput');
  console.log(`The value of myInput is: ${myInput}`);
  
  // Your action's logic here using the input value
} catch (error) {
  core.setFailed(error.message);
}


const { GitHub, context } = require('@actions/github');
const fs = require('fs');
const jwt = require('jsonwebtoken');

async function fetchEnterpriseSettings() {
  try {
    const appId = process.env.APP_ID; // Replace with your GitHub App's ID
    const privateKey = fs.readFileSync('path/to/your/private-key.pem', 'utf8'); // Replace with your private key path
    const installationId = context.payload.installation.id; // Installation ID of the app on the Enterprise instance

    const now = Math.floor(Date.now() / 1000);
    const payload = {
      iat: now,
      exp: now + 60,
      iss: appId,
    };

    const token = jwt.sign(payload, privateKey, { algorithm: 'RS256' });

    const octokit = new GitHub({
      baseUrl: 'https://your-enterprise-instance/api/v3', // Replace with your Enterprise instance URL
      auth: `Bearer ${token}`,
    });

    // Use octokit to make API requests to fetch enterprise settings
    const settings = await octokit.request('GET /enterprise/settings');

    console.log('Enterprise Settings:', settings.data);
  } catch (error) {
    console.error('Error fetching enterprise settings:', error);
  }
}

fetchEnterpriseSettings();

