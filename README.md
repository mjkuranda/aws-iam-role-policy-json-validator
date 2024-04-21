# AWS IAM Role Policy JSON Validator

## About
method `isResourceValid` verifies the input JSON data. Input data format is defined as AWS::IAM::Role Policy - definition and example [AWS IAM Role JSON definition and example](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-role-policy.html).
Method shall return logical false if an input JSON Resource field contains a single asterisk and true in any other case. 

## Run
Execute:

```bash
npm run build
npm run start
npm run test
```
