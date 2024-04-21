import { readJson } from './utils/json-reader.js';
import { isResourceValid } from './utils/json-validator.js';

console.log('Hello JS!');

const obj = readJson('example');

console.log(obj);
console.log(isResourceValid(obj));