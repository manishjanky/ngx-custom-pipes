import { ArrayOmitPipe } from './array-omit.pipe';

describe('ArrayOmitPipe', () => {
  it('create an instance', () => {
    const pipe = new ArrayOmitPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return value if not array', () => {
    const pipe = new ArrayOmitPipe();
    expect(pipe.transform('test' as any)).toEqual('test' as any);
  });

  it('should return the array after omiting the values', () => {
    const pipe = new ArrayOmitPipe();
    expect(pipe.transform([1, 2, 3, 4, 5, 6, 7])).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  it('should return the array after omiting the values', () => {
    const pipe = new ArrayOmitPipe();
    expect(pipe.transform([1, 2, 3, 4, 5, 6, 7], [4, 7, 9])).toEqual([1, 2, 3, 5, 6]);
  });
});
