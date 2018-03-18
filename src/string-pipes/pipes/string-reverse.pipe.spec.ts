import { StringReversePipe } from './string-reverse.pipe';

describe('StringReversePipe', () => {
  it('create an instance', () => {
    const pipe = new StringReversePipe();
    expect(pipe).toBeTruthy();
  });
});
