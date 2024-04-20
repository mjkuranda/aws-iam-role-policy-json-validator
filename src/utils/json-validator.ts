export function isValidAwsIamPolicy(json: unknown): boolean {
    if (json === null) {
        return false;
    }

    if (typeof json !== 'object') {
        return false;
    }

    // @ts-ignore
    const { Version, Statement } = json;

    if (!Version || !Statement) {
        return false;
    }

    return true;
}