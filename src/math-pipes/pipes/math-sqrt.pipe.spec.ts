import { MathSqrtPipe } from './math-sqrt.pipe';

describe('MathSqrtPipe', () => {
  it('create an instance', () => {
    const pipe = new MathSqrtPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return the square root', () => {
    const pipe = new MathSqrtPipe();
    expect(pipe.transform(225)).toBeTruthy(15);
  });

  it('should return the square root for null', () => {
    const pipe = new MathSqrtPipe();
    expect(pipe.transform('test' as any)).toBeTruthy('test' as any);
  });
});
