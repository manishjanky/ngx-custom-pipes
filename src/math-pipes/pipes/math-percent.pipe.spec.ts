import { MathPercentagePipe } from './math-percent.pipe';

describe('MathPercentagePipe', () => {
  it('create an instance', () => {
    const pipe = new MathPercentagePipe();
    expect(pipe).toBeTruthy();
  });

  it('should convert the value to percent', () => {
    const pipe = new MathPercentagePipe();
    expect(pipe.transform(23, 200)).toEqual((23 / 2) + "%");
  });

  it('should convert the value to percent', () => {
    const pipe = new MathPercentagePipe();
    expect(pipe.transform(23)).toEqual("23%");
  });

  it('should convert the value to percent', () => {
    const pipe = new MathPercentagePipe();
    expect(pipe.transform('test' as any)).toEqual("test");
  });
});
