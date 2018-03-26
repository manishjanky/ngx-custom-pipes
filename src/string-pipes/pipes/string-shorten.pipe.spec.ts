import { StringShortenPipe } from './string-shorten.pipe';

describe('StringShortenPipe', () => {
  it('create an instance', () => {
    const pipe = new StringShortenPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return the shortened profile name', () => {
    const pipe = new StringShortenPipe();
    expect(pipe.transform('Manish Kumar')).toEqual('MK');
  });
});
