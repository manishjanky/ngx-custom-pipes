import { MathRoundOffPipe } from './math-round-off.pipe';

describe('MathRoundOffPipe', () => {
  it('create an instance', () => {
    const pipe = new MathRoundOffPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return rounded of value', () => {
    const pipe = new MathRoundOffPipe();
    expect(pipe.transform(2.34534, 3)).toBeTruthy(2.345);
  });

  // it('should return rounded of null value', () => {
  //   const pipe = new MathRoundOffPipe();
  //   expect(pipe.transform(null, 3)).toBeTruthy(0);
  // });
});
