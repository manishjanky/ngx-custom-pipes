import { MathPowPipe } from './math-pow.pipe';

describe('MathPowPipe', () => {
  it('create an instance', () => {
    const pipe = new MathPowPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return the power raised to', () => {
    const pipe = new MathPowPipe();
    expect(pipe.transform(5, 3)).toEqual(125);
  });
});
