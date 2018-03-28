import { MathRoundOffPipe } from './math-round-off.pipe';

describe('MathRoundOffPipe', () => {
  it('create an instance', () => {
    const pipe = new MathRoundOffPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return rounded of value', () => {
    const pipe = new MathRoundOffPipe();
    expect(pipe.transform(2.34534, 3)).toEqual('2.345');
  });

  it('should return rounded of null value', () => {
    const pipe = new MathRoundOffPipe();
    expect(pipe.transform("test" as any, 3)).toEqual("test" as any);
  });

  it('should return rounded of value', () => {
    const pipe = new MathRoundOffPipe();
    expect(pipe.transform(123.566767)).toEqual('124');
  });
});
