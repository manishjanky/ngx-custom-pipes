import { ArraySumPipe } from './array-sum.pipe';

describe('ArraySumPipe', () => {
  it('create an instance', () => {
    const pipe = new ArraySumPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return summ of items as 0 if not array', () => {
    const pipe = new ArraySumPipe();
    expect(pipe.transform("hello" as any)).toEqual(0);
  });

  it('should return summ of array items', () => {
    const pipe = new ArraySumPipe();
    expect(pipe.transform([1, 2, 8, 9, 19])).toEqual(39);
  });
});
