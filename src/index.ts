import { readJson } from './utils/json-reader';
import { IamRolePolicy } from './types/aws-iam-policy.type';

console.log('Hello TS!');

const obj: IamRolePolicy | null = readJson('example');

console.log(obj);