#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AmplifyStack } from '../lib/amplify-stack';

const app = new cdk.App();

new AmplifyStack(app, 'av-converter-cra', {
  env: { account: '124051425190', region: 'eu-west-2' },
});
