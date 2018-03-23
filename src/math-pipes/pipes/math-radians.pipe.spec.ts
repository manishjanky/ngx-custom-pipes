import { MathRadiansPipe } from './math-radians.pipe';

describe('MathRadiansPipe', () => {
  it('create an instance', () => {
    const pipe = new MathRadiansPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return radians for the value', () => {
    const pipe = new MathRadiansPipe();
    expect(pipe.transform(90)).toEqual(90 * Math.PI / 180);
  });
});
