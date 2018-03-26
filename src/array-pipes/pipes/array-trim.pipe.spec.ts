import { ArrayTrimPipe } from './array-trim.pipe';

describe('ArrayTrimPipe', () => {
  it('create an instance', () => {
    const pipe = new ArrayTrimPipe();
    expect(pipe).toBeTruthy();
  });

  it('should remove elements from array with specified number', () => {
    const pipe = new ArrayTrimPipe();
    expect(pipe.transform([1, 2, 3, 4, 5, 6, 7, 8, 9], 2)).toEqual([3, 4, 5, 6, 7]);
  });

  it('should remove elements from array with specified number when not array', () => {
    const pipe = new ArrayTrimPipe();
    expect(pipe.transform('dddd' as any, 2)).toEqual('dddd');
  });
});
