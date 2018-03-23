import { MathFloorPipe } from './math-floor.pipe';

describe('MathFloorPipe', () => {
  it('create an instance', () => {
    const pipe = new MathFloorPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return floor value', () => {
    const pipe = new MathFloorPipe();
    expect(pipe.transform(0.6457)).toEqual(0);
  });

  it('should return floor value', () => {
    const pipe = new MathFloorPipe();
    expect(pipe.transform(3.999)).toEqual(3);
  });
});
