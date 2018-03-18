import { MathFromBinaryPipe } from './math-from-binary.pipe';

describe('MathFromBinaryPipe', () => {
  it('create an instance', () => {
    const pipe = new MathFromBinaryPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return decimal value for binary passed', () => {
    const pipe = new MathFromBinaryPipe();
    expect(pipe.transform('00001100')).toEqual(12);
  });

  it('should return decimal value for binary passed', () => {
    const pipe = new MathFromBinaryPipe();
    expect(pipe.transform('110')).toEqual(6);
  });
});
