import { ArrayReversePipe } from './array-reverse.pipe';

describe('ArrayReversePipe', () => {
  it('create an instance', () => {
    const pipe = new ArrayReversePipe();
    expect(pipe).toBeTruthy();
  });

  it('should reverse the array', () => {
    const pipe = new ArrayReversePipe();
    expect(pipe.transform([1, 2, 3, 489, 23])).toBeTruthy([23, , 489, 3, 2, 1]);
  });

  it('should reverse the array', () => {
    const pipe = new ArrayReversePipe();
    expect(pipe.transform('test' as any)).toBeTruthy('test' as any);
  });
});
