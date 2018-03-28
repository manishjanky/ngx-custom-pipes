import { MathToBinaryPipe } from './math-to-binary.pipe';

describe('MathBinaryPipe', () => {
  it('create an instance', () => {
    const pipe = new MathToBinaryPipe();
    expect(pipe).toBeTruthy();
  });

  it('return binary for decimal', () => {
    const pipe = new MathToBinaryPipe();
    expect(pipe.transform(12)).toEqual('1100');
  });

  it('return binary for string', () => {
    const pipe = new MathToBinaryPipe();
    expect(pipe.transform("test" as any)).toEqual('test' as any);
  });

  it('return octal for a number', () => {
    const pipe = new MathToBinaryPipe();
    expect(pipe.transform(1234, 8)).toEqual('2322');
  });
});
