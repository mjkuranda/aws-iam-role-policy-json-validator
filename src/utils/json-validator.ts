import { IamPolicy } from '../types/aws-iam-policy.type';

export function isResourceValid(policy: IamPolicy): boolean {
    const { PolicyName, PolicyDocument } = policy;

    if (!PolicyName || !PolicyDocument) {
        return false;
    }

    for (const statement of PolicyDocument.Statement) {
        const { Resource } = statement;

        if (Resource === '*') {
            return false;
        }

        if (Array.isArray(Resource) && Resource.includes('*')) {
            return false;
        }
    }

    return true;
}