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

  it('should return the power raised when value invalid', () => {
    const pipe = new MathPowPipe();
    expect(pipe.transform('test' as any, 3)).toEqual('test' as any);
  });

  it('should return the power raised when value invalid', () => {
    const pipe = new MathPowPipe();
    expect(pipe.transform(5, 'err' as any)).toEqual(5);
  });
});
