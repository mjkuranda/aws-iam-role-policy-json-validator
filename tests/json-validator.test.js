import { isResourceValid } from '../src/utils/json-validator.js';
import { readJson } from '../src/utils/json-reader.js';

describe('isResourceValid', () => {
    describe('Valid resource', () => {
        it('should return true when no asterisk', () => {
            const policy = readJson('tests/no-asterisk');

            expect(isResourceValid(policy)).toBe(true);
        });
    });
});
// describe('Valid resource - no asterisk', () => {
//     const policy: IamPolicy = readJson('no-asterisk');
//
//     expect(isResourceValid(policy)).toBe(true);
// });

// describe('Invalid resource - single asterisk as string', () => {
//     const policy: IamPolicy = readJson('single-asterisk');
//
//     expect(isResourceValid(policy)).toBe(false);
// });
//
// describe('Invalid resource - asterisk inside array', () => {
//     const policy: IamPolicy = readJson('asterisk-inside-array');
//
//     expect(isResourceValid(policy)).toBe(false);
// });
//
// describe('Valid resource - empty', () => {
//     const policy: IamPolicy = readJson('empty-resource');
//
//     expect(isResourceValid(policy)).toBe(true);
// });

// Test sprawdzający, czy metoda poprawnie obsługuje politykę z wieloma instrukcjami i różnymi wartościami pola Resource.
// test('Multiple statements - mixed resources', () => {
//     const policy: IamRolePolicy = {
//         Version: '2012-10-17',
//         Statement: [
//             {
//                 Effect: 'Allow',
//                 Action: 's3:GetObject',
//                 Resource: 'arn:aws:s3:::examplebucket/*'
//             },
//             {
//                 Effect: 'Allow',
//                 Action: 's3:PutObject',
//                 Resource: '*'
//             },
//             {
//                 Effect: 'Deny',
//                 Action: 's3:DeleteObject',
//                 Resource: []
//             }
//         ]
//     };
//     expect(isResourceValid(policy)).toBe(false);
// });