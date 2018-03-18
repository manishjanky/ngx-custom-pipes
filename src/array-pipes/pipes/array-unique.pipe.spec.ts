import { ArrayUniquePipe } from './array-unique.pipe';

describe('ArrayUniquePipe', () => {
  it('create an instance', () => {
    const pipe = new ArrayUniquePipe();
    expect(pipe).toBeTruthy();
  });
});
