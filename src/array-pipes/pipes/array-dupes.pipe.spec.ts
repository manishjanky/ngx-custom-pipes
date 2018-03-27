import { testData } from './../test';
import { ArrayDupesPipe } from './array-dupes.pipe';


describe('ArrayDupesPipePipe', () => {
  it('create an instance', () => {
    const pipe = new ArrayDupesPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return value if not array', () => {
    const pipe = new ArrayDupesPipe();
    expect(pipe.transform('test' as any)).toEqual('test' as any);
  });

  it('should return empty array when empty array passed', () => {
    const pipe = new ArrayDupesPipe();
    expect(pipe.transform(testData)).toEqual(testData);
  });

  it('should return duplicate items', () => {
    const pipe = new ArrayDupesPipe();
    const res = [testData[2], testData[3]];
    expect(pipe.transform(testData.concat([testData[2], testData[3]]), 'firstName')).toEqual(res);
  });

  it('should return duplicate items when incorrect key name', () => {
    const pipe = new ArrayDupesPipe();
    expect(pipe.transform(testData.concat([testData[2], testData[3]]), 'random')).toEqual(testData.concat([testData[2], testData[3]]));
  });

  it('should return duplicate items for non object items', () => {
    const pipe = new ArrayDupesPipe();
    expect(pipe.transform([1, 2, 3, 3, 8, 5, 2, 4, 5])).toEqual([2, 3, 5]);
  });
});
