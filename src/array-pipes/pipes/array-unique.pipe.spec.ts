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

  it('should return the value when array not passes', () => {
    const pipe = new ArrayUniquePipe();
    expect(pipe.transform({q:'sd',w:'sdsd'})).toEqual({q:'sd',w:'sdsd'});
  });
});
