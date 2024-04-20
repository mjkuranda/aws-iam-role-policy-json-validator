import { readJson } from './utils/json-reader';
import { IamPolicy } from './types/aws-iam-policy.type';
import {isResourceValid} from "./utils/json-validator";

console.log('Hello TS!');

const obj: IamPolicy | null = readJson('example');

console.log(obj);
console.log(isResourceValid(obj));