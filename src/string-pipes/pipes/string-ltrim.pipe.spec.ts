import { StringLtrimPipe } from './string-ltrim.pipe';

describe('StringLtrimPipe', () => {
  it('create an instance', () => {
    const pipe = new StringLtrimPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return left trimmed string', () => {
    const pipe = new StringLtrimPipe();
    expect(pipe.transform("jhfshjfsd", "j")).toEqual("hfshjfsd");
  });

  it('should return left trimmed string', () => {
    const pipe = new StringLtrimPipe();
    expect(pipe.transform("jhfshjfsd")).toEqual("jhfshjfsd");
  });
});
