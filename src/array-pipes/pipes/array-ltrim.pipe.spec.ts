import { ArrayLtrimPipe } from './array-ltrim.pipe';

describe('ArrayLtrimPipe', () => {
  it('create an instance', () => {
    const pipe = new ArrayLtrimPipe();
    expect(pipe).toBeTruthy();
  });

  it('should trim the from left', () => {
    const pipe = new ArrayLtrimPipe();
    expect(pipe.transform([12, 34, 5, 56, 546, 34, 3, 54], 3)).toEqual([56, 546, 34, 3, 54]);
  });

  it('should return te value when not array', () => {
    const pipe = new ArrayLtrimPipe();
    expect(pipe.transform('test' as any)).toEqual('test' as any);
  });
});
