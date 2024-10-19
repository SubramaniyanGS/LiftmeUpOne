// services/gcpService.js
import axios from 'axios';
import { readFileSync } from 'fs';
import jwt from 'jsonwebtoken';
import path from 'path';

// Load your service account key JSON
const keyFile = require('../path/to/your-service-account-file.json'); // Adjust the path accordingly

const getAuthToken = async () => {
  const { client_email, private_key, token_uri } = keyFile;

  const token = jwt.sign(
    {
      iss: client_email,
      scope: 'https://www.googleapis.com/auth/cloud-platform',
      aud: token_uri,
      exp: Math.floor(Date.now() / 1000) + 60 * 60,
      iat: Math.floor(Date.now() / 1000),
    },
    private_key,
    { algorithm: 'RS256' }
  );

  const response = await axios.post(token_uri, null, {
    params: {
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: token,
    },
  });

  return response.data.access_token;
};

export const getPrediction = async (data) => {
  const authToken = await getAuthToken();
  const response = await axios.post(
    'https://us-central1-ml.googleapis.com/v1/projects/tokyo-comfort-428703/models/your-model-name:predict', // Adjust the URL
    {
      instances: [data],
    },
    {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
  );
  return response.data;
};
