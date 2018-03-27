import { MathModePipe } from './math-mode.pipe';

describe('MathModePipe', () => {
  it('create an instance', () => {
    const pipe = new MathModePipe();
    expect(pipe).toBeTruthy();
  });

  it('should calculate the mode of an array', () => {
    const pipe = new MathModePipe();
    expect(pipe.transform([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7, 9, 3, 2, 3, 8, 4, 6])).toEqual([3]);
  });

  it('should calculate the mode of an array', () => {
    const pipe = new MathModePipe();
    expect(pipe.transform("test" as any)).toEqual("test" as any);
  });
});
