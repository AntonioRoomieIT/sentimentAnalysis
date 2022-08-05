import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-provider-cognito-identity";
import { sentimentClient } from "@aws-sdk/client-comprehend";

var AWS = require("aws-sdk");
const debug = require('debug')('app:index')
const config = require('./config.js')
AWS.config.update({ region: config.ComprehendRegion })