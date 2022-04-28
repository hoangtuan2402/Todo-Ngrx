import * as fromCheckAuth from './check-auth.actions';

describe('yCheckAuths', () => {
  it('should return an action', () => {
    expect(fromCheckAuth.yCheckAuths().type).toBe('[CheckAuth] Y CheckAuths');
  });
});
