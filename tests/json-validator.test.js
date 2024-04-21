import { isResourceValid } from '../src/utils/json-validator.js';
import { readJson } from '../src/utils/json-reader.js';

describe('isResourceValid', () => {
    describe('Return true', () => {
        it('should pass when no asterisk', () => {
            const policy = readJson('tests/no-asterisk');

            expect(isResourceValid(policy)).toBe(true);
        });

        it('should pass when no asterisk', () => {
            const policy = readJson('tests/no-asterisk');

            expect(isResourceValid(policy)).toBe(true);
        });

        it('should pass when empty', () => {
            const policy = readJson('tests/empty-resource');

            expect(isResourceValid(policy)).toBe(true);
        });
    });

    describe('Return false', () => {
        it('should pass when single asterisk as string', () => {
            const policy = readJson('tests/single-asterisk');

            expect(isResourceValid(policy)).toBe(false);
        });

        it('should pass when asterisk inside array', () => {
            const policy = readJson('tests/asterisk-inside-array');

            expect(isResourceValid(policy)).toBe(false);
        });

        it('should pass when mixed resources', () => {
            const policy = readJson('tests/mixed-resources');

            expect(isResourceValid(policy)).toBe(false);
        });
    });
});