import { testData } from './../test';
import { ArrayLimitToPipe } from './array-limit-to.pipe';

describe('ArrayLimitToPipe', () => {
  it('create an instance', () => {
    const pipe = new ArrayLimitToPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return the array with specified limit', () => {
    const data = JSON.parse(JSON.stringify(testData));
    const pipe = new ArrayLimitToPipe();
    expect(pipe.transform(data, 5)).toEqual(data.slice(0, 5));
  });

  it('should return the array with specified limit', () => {
    const data = JSON.parse(JSON.stringify(testData));
    const pipe = new ArrayLimitToPipe();
    expect(pipe.transform(data, 5, 5)).toEqual(data.slice(5, 10));
  });

  it('should return the array invalid input', () => {
    const pipe = new ArrayLimitToPipe();
    expect(pipe.transform('test' as any, 5)).toEqual('test' as any);
  });
});
