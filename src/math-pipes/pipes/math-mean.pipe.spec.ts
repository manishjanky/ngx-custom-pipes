import { MathMeanPipe } from './math-mean.pipe';

describe('MathMeanPipe', () => {
  it('create an instance', () => {
    const pipe = new MathMeanPipe();
    expect(pipe).toBeTruthy();
  });
  it('should return mean value for array passed', () => {
    const pipe = new MathMeanPipe();
    expect(pipe.transform([1, 2, 34, 5, 6, 7])).toEqual(55 / 6);
  });

  it('should return mean value for array passed', () => {
    const pipe = new MathMeanPipe();
    expect(pipe.transform([])).toEqual(0);
  });

  it('should return mean value for array passed', () => {
    const pipe = new MathMeanPipe();
    expect(pipe.transform('test' as any)).toEqual(0);;
  });
});
