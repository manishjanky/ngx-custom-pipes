import { StringTrimPipe } from './string-trim.pipe';

describe('StringTrimPipe', () => {
  it('create an instance', () => {
    const pipe = new StringTrimPipe();
    expect(pipe).toBeTruthy();
  });
});
