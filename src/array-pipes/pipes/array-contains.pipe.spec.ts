import { ArrayContainsPipe } from './array-contains.pipe';

describe('ArrayContainsPipe', () => {
  it('create an instance', () => {
    const pipe = new ArrayContainsPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return if items is present in array or not', () => {
    const pipe = new ArrayContainsPipe();
    expect(pipe.transform([1, 2, 3, 4, 5], 4)).toEqual(true);
  });

  it('should return if items is present in array or not with notArray value', () => {
    const pipe = new ArrayContainsPipe();
    expect(pipe.transform({w:'ssss'} as any, 4)).toEqual(false);
  });

});
