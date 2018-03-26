import { StringUcwordsFirstPipe } from './string-ucwords-first.pipe';

describe('StringUcwordsFirstPipe', () => {
  it('create an instance', () => {
    const pipe = new StringUcwordsFirstPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return string with each words first letter in uppercase', () => {
    const pipe = new StringUcwordsFirstPipe();
    expect(pipe.transform('this is a test string')).toEqual('This Is A Test String');
  });
});
