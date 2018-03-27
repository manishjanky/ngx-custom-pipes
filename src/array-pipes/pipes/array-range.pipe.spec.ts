import { testData } from './../test';
import { ArrayRangePipe } from './array-range.pipe';

describe('ArrayRangePipe', () => {
  it('create an instance', () => {
    const pipe = new ArrayRangePipe();
    expect(pipe).toBeTruthy();
  });

  it('should return elements in the specified range', () => {
    const pipe = new ArrayRangePipe();
    expect(pipe.transform(testData, 2, 5)).toBeTruthy(testData.slice(2, 6));
  });

  it('should return elements in the specified range', () => {
    const pipe = new ArrayRangePipe();
    expect(pipe.transform(testData)).toBeTruthy(testData);
  });

  it('should return elements in the specified range', () => {
    const pipe = new ArrayRangePipe();
    expect(pipe.transform('test' as any)).toBeTruthy('test' as any);
  });
});
