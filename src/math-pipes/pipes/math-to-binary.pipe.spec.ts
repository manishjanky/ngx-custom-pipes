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

  // it('return binary for null', () => {
  //   const pipe = new MathBinaryPipe();
  //   expect(pipe.transform("null")).toEqual('');
  // });
});
