import { StringShortenPipe } from './string-shorten.pipe';

describe('StringShortenPipe', () => {
  it('create an instance', () => {
    const pipe = new StringShortenPipe();
    expect(pipe).toBeTruthy();
  });
});
