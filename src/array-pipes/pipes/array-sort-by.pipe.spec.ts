import { testData } from './../test';
import { ArraySortByPipe } from './array-sort-by.pipe';

let sortedTestDatabyFirstName = testData.sort((a, b) => a.firstName.toString().localeCompare(b.firstName));
describe('ArraySortByPipe', () => {
  it('create an instance', () => {
    const pipe = new ArraySortByPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return a sorted array', () => {
    const pipe = new ArraySortByPipe();
    expect(pipe.transform([2, 8, 3, 6, 34, 12])).toEqual([2, 3, 6, 8, 12, 34]);
  });

  it('should return a sorted array', () => {
    const pipe = new ArraySortByPipe();
    expect(pipe.transform([2, 8, 3, 6, 34, 12], true)).toEqual([34, 12, 8, 6, 3, 2]);
  });

  it('should return a sorted array when value not array', () => {
    const pipe = new ArraySortByPipe();
    expect(pipe.transform("asdf" as any)).toEqual('asdf');
  });

  it('should return a sorted array when value string array', () => {
    const pipe = new ArraySortByPipe();
    expect(pipe.transform(['asd', 'def', 'bghi', 'nhm'])).toEqual(['asd', 'bghi', 'def', 'nhm']);
  });

  it('should return a sorted array when value empty array', () => {
    const pipe = new ArraySortByPipe();
    expect(pipe.transform([])).toEqual([]);
  });

  it('should return a sorted array when for array of objects', () => {
    const pipe = new ArraySortByPipe();
    expect(pipe.transform(testData, false, 'firstName')).toEqual(sortedTestDatabyFirstName);
  });
});
