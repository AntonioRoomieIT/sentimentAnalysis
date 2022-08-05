/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
ABOUT THIS NODE.JS EXAMPLE: This example works with the AWS SDK for JavaScript version 3 (v3),
which is available at https://github.com/aws/aws-sdk-js-v3.

Purpose:
sesClient.js is a helper function that creates the Amazon Simple Email Service (SES) clients.

Inputs (replace in code):
- REGION
- IDENTITY_POOL_ID - an Amazon Cognito Identity Pool ID.
*/
// snippet-start:[sesClient.JavaScript.streaming.createclientv3]
import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-provider-cognito-identity";
import { SESClient } from "@aws-sdk/client-ses";

const REGION = "us-east-1";
const IDENTITY_POOL_ID = "us-east-1:452c4d5e-1c2a-4da2-bd5d-034bedfc174e"; // An Amazon Cognito Identity Pool ID.

// Create Amazon SES service object.
const sesClient = new SESClient({
  region: REGION,
  credentials: fromCognitoIdentityPool({
    client: new CognitoIdentityClient({ region: REGION }),
    identityPoolId: IDENTITY_POOL_ID,
  }),
});

export { sesClient };
// snippet-end:[sesClient.JavaScript.streaming.createclientv3]
