import { StringReplaceFirstPipe } from './string-replace-first.pipe';

describe('StringReplaceFirstPipe', () => {
  it('create an instance', () => {
    const pipe = new StringReplaceFirstPipe();
    expect(pipe).toBeTruthy();
  });

  it('should replace the first occurance of character', () => {
    const pipe = new StringReplaceFirstPipe();
    expect(pipe.transform('reppeat', 'p', 'x')).toEqual('rexpeat');
  });
});
