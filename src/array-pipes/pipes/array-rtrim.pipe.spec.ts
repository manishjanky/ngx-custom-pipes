import { ArrayRtrimPipe } from './array-rtrim.pipe';

describe('ArrayRtrimPipe', () => {
  it('create an instance', () => {
    const pipe = new ArrayRtrimPipe();
    expect(pipe).toBeTruthy();
  });

  it('should trim array from right', () => {
    const pipe = new ArrayRtrimPipe();
    expect(pipe.transform([1, 2, 3, 4, 7, 8, 9, 32, 65], 4)).toEqual([1, 2, 3, 4, 7]);
  });

  it('should trim array from right', () => {
    const pipe = new ArrayRtrimPipe();
    expect(pipe.transform('test' as any)).toEqual('test' as any);
  });
});
