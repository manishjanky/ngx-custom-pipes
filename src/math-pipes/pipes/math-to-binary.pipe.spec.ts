import { MathBinaryPipe } from './math-to-binary.pipe';

describe('MathBinaryPipe', () => {
  it('create an instance', () => {
    const pipe = new MathBinaryPipe();
    expect(pipe).toBeTruthy();
  });

  it('return binary for decimal', () => {
    const pipe = new MathBinaryPipe();
    expect(pipe.transform(12)).toEqual('1100');
  });

  it('return binary for string', () => {
    const pipe = new MathBinaryPipe();
    expect(pipe.transform("test" as any)).toEqual('test' as any);
  });

  it('return octal for a number', () => {
    const pipe = new MathBinaryPipe();
    expect(pipe.transform(1234,8)).toEqual('2322');
  });
});
