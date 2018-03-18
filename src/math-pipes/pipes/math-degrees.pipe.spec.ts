import { MathDegreesPipe } from './math-degrees.pipe';

describe('MathDegreesPipe', () => {
  it('create an instance', () => {
    const pipe = new MathDegreesPipe();
    expect(pipe).toBeTruthy();
  });

  // it('should return degrees value as 90', () => {
  //   const pipe = new MathDegreesPipe();
  //   expect(pipe.transform(1.5708)).toEqual(90);
  // });

  // it('should return degrees value as 30', () => {
  //   const pipe = new MathDegreesPipe();
  //   expect(pipe.transform(0.6457)).toEqual(30);
  // });
});
