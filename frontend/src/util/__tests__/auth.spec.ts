import { hasAnyRoles } from '../auth';
import * as TokenModule from '../token';

describe('hasAnyRoles tests', () => {

    test('hasAnyRoles should return true when list is empty', () => {
        const result = hasAnyRoles([]);
        expect(result).toEqual(true);
    });

    test('hasAnyRoles should return true when user has given role', () => {
        jest.spyOn(TokenModule, 'getTokenData').mockReturnValue({
            exp: 0,
            user_name: '',
            userId: 1,
            authorities: ['ROLE_MEMBER', 'ROLE_VISITOR']
        });

        const result = hasAnyRoles(['ROLE_MEMBER']);

        expect(result).toEqual(true);
    });

    test('hasAnyRoles should return false when user does not have given role', () => {
        jest.spyOn(TokenModule, 'getTokenData').mockReturnValue({
            exp: 0,
            user_name: '',
            userId: 1,
            authorities: ['ROLE_VISITOR']
        });

        const result = hasAnyRoles(['ROLE_MEMBER']);

        expect(result).toEqual(false);
    });

});