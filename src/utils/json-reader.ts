import fs from 'fs';
import { IamRolePolicy } from '../types/aws-iam-policy.type';
import { isValidAwsIamPolicy } from "./json-validator";

const DATA_PATH = 'data';

export function readJson(fileName: string): IamRolePolicy | null {
    const filePath = `${DATA_PATH}/${fileName}.json`;

    try {
        const data = fs.readFileSync(filePath, 'utf8');
        const jsonData = JSON.parse(data);

        if (!isValidAwsIamPolicy(jsonData)) {
            console.error('Validation JSON error: Object is not type of IamRolePolicy');

            return null;
        }

        return jsonData as IamRolePolicy;
    } catch (error) {
        console.error('Error occurred while reading JSON file:', error);

        return null;
    }
}