import { StringProfileName } from './string-profile-name.pipe';

describe('StringProfileName', () => {
  it('create an instance', () => {
    const pipe = new StringProfileName();
    expect(pipe).toBeTruthy();
  });

  it('should return the shortened profile name', () => {
    const pipe = new StringProfileName();
    expect(pipe.transform('Manish Kumar')).toEqual('MK');
  });
});
