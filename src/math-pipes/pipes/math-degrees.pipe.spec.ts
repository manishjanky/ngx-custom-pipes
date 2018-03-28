import { MathDegreesPipe } from './math-degrees.pipe';

describe('MathDegreesPipe', () => {
  it('create an instance', () => {
    const pipe = new MathDegreesPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return radian value as degrees', () => {
    const pipe = new MathDegreesPipe();
    expect(pipe.transform(167)).toEqual(167 * 180 / Math.PI);
  });

  it('should return value as when not a number', () => {
    const pipe = new MathDegreesPipe();
    expect(pipe.transform('test' as any)).toEqual('test' as any);
  });
});
