#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { TestcicdStack } from '../lib/testcicd-stack';

const app = new cdk.App();
new TestcicdStack(app, 'TestcicdStack', {
  
  env: { account: '196715057542', region: 'us-east-1' },
});