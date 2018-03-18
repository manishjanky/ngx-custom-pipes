import { MathCeilingPipe } from './math-ceil.pipe';

describe('MathCeilingPipe', () => {
  it('create an instance', () => {
    const pipe = new MathCeilingPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return ceiling value', () => {
    const pipe = new MathCeilingPipe();
    expect(pipe.transform(10.23)).toEqual(11);
  });

  it('should return ceiling value', () => {
    const pipe = new MathCeilingPipe();
    expect(pipe.transform(null)).toEqual(0);
  });
});
