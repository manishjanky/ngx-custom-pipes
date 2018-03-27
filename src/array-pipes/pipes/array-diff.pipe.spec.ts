import { ArrayDiffPipe } from './array-diff.pipe';

describe('ArrayDiffPipePipe', () => {
  it('create an instance', () => {
    const pipe = new ArrayDiffPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return value when not array', () => {
    const pipe = new ArrayDiffPipe();
    expect(pipe.transform('test' as any)).toEqual('test' as any);
  });

  it('should return array when second array not passed', () => {
    const pipe = new ArrayDiffPipe();
    expect(pipe.transform([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it('should return difference of two arrays', () => {
    const pipe = new ArrayDiffPipe();
    expect(pipe.transform([1, 2, 3, 4, 5], [2, 3, 7, 8, 1])).toEqual([4, 5, 7, 8]);
  });
});
