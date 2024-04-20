import fs from 'fs';
import { IamPolicy } from '../types/aws-iam-policy.type';

const DATA_PATH = 'data';

export function readJson(fileName: string): IamPolicy {
    const filePath = `${DATA_PATH}/${fileName}.json`;

    try {
        const data = fs.readFileSync(filePath, 'utf8');
        const jsonData = JSON.parse(data);

        return jsonData as IamPolicy;
    } catch (error: any) {
        throw new Error('Error occurred while reading JSON file: ' + error.message);
    }
}