import { StringReplaceLastPipe } from './string-replace-last.pipe';

describe('StringReplaceLastPipe', () => {
  it('create an instance', () => {
    const pipe = new StringReplaceLastPipe();
    expect(pipe).toBeTruthy();
  });

  it('should replace last occurance of char', () => {
    const pipe = new StringReplaceLastPipe();
    expect(pipe.transform('repeat', 't')).toEqual('repea');
  });

  it('should replace the first occurance of character', () => {
    const pipe = new StringReplaceLastPipe();
    expect(pipe.transform('reppeat', 'p', 'x')).toEqual('repxeat');
  });

  it('should replace the first occurance of character', () => {
    const pipe = new StringReplaceLastPipe();
    expect(pipe.transform('hello world', 'h', 'x')).toEqual('xello world');
  });
});
