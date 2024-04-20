export interface IamPolicy {
    PolicyName: string;
    PolicyDocument: IamRolePolicy;
}

export interface IamRolePolicy {
    Version: string;
    Statement: IAMPolicyStatement[];
}

export interface IAMPolicyStatement {
    Effect: string;
    Action: string | string[];
    Resource: string | string[];
}