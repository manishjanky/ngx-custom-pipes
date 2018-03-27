import { testData } from './../test';
import { ArrayShufflePipe } from './array-shuffle.pipe';

describe('ArrayShufflePipe', () => {
  it('create an instance', () => {
    const pipe = new ArrayShufflePipe();
    expect(pipe).toBeTruthy();
  });

  it('should return a shuffled array', () => {
    const pipe = new ArrayShufflePipe();
    expect(pipe.transform(testData).length).toEqual(testData.length);
  });

  it('should return the value for not an array', () => {
    const pipe = new ArrayShufflePipe();
    expect(pipe.transform('test' as any)).toEqual('test' as any);
  });
});
