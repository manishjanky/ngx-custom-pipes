import { ArrayMaxPipe } from './array-max.pipe';

describe('ArrayMaxPipe', () => {
  it('create an instance', () => {
    const pipe = new ArrayMaxPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return the max value from array', () => {
    const pipe = new ArrayMaxPipe();
    expect(pipe.transform([1, 23, 4556, 67, 8, 9])).toEqual(4556);
  });

  it('should return the max value from array with invalid input', () => {
    const pipe = new ArrayMaxPipe();
    expect(pipe.transform('test' as any)).toEqual(0);
  });
});
