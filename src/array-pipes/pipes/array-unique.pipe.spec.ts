import { testData } from './../test';
import { ArrayUniquePipe } from './array-unique.pipe';

describe('ArrayUniquePipe', () => {
  it('create an instance', () => {
    const pipe = new ArrayUniquePipe();
    expect(pipe).toBeTruthy();
  });

  it('should return unique elements of an array', () => {
    const pipe = new ArrayUniquePipe();
    expect(pipe.transform([1, 2, 33, 4, 4, 5, 66, 33, 4])).toEqual([1, 2, 33, 4, 5, 66]);
  });

  it('should return the value when array not passed', () => {
    const pipe = new ArrayUniquePipe();
    expect(pipe.transform({ q: 'sd', w: 'sdsd' } as any)).toEqual({ q: 'sd', w: 'sdsd' } as any);
  });

  it('should return the unique elements with array of objects', () => {
    const pipe = new ArrayUniquePipe();
    expect(pipe.transform(testData)).toEqual(testData);
  });

  it('should return the unique elements with array of objects', () => {
    const pipe = new ArrayUniquePipe();
    expect(pipe.transform(testData.concat([testData[0], testData[5]]))).toEqual(testData);
  });
});
