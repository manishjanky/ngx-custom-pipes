import { MathBinaryPipe } from './math-to-binary.pipe';

describe('MathBinaryPipe', () => {
  it('create an instance', () => {
    const pipe = new MathBinaryPipe();
    expect(pipe).toBeTruthy();
  });
});
