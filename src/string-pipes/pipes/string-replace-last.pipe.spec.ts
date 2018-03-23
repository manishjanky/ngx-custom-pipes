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
});
