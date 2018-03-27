import { ArrayMergePipe } from './array-merge.pipe';

describe('ArrayMergePipe', () => {
  it('create an instance', () => {
    const pipe = new ArrayMergePipe();
    expect(pipe).toBeTruthy();
  });

  it('should merge all the arrays', () => {
    const pipe = new ArrayMergePipe();
    const a = [1, 2, 3, 4];
    const b = [21, 32, 4];
    const c = ['a', 'f'];
    expect(pipe.transform(a, b, c)).toEqual([1, 2, 3, 4, 21, 32, 4, 'a', 'f']);
  });

  it('should value when value is not array', () => {
    const pipe = new ArrayMergePipe();
    expect(pipe.transform('test' as any)).toEqual('test' as any);
  });
});
