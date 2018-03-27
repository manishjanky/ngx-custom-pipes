import { ArrayMinPipe } from './array-min.pipe';

describe('ArrayMinPipe', () => {
  it('create an instance', () => {
    const pipe = new ArrayMinPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return the min value from array', () => {
    const pipe = new ArrayMinPipe();
    expect(pipe.transform([1, 23, 4556, 67, 8, 9])).toEqual(1);
  });

  it('should return the min value from array with invalid input', () => {
    const pipe = new ArrayMinPipe();
    expect(pipe.transform('test' as any)).toEqual(0);
  });
});
