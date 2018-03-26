import { StringRtrimPipe } from './string-rtrim.pipe';

describe('StringRtrimPipe', () => {
  it('create an instance', () => {
    const pipe = new StringRtrimPipe();
    expect(pipe).toBeTruthy();
  });

  it('should trim characters from the end', () => {
    const pipe = new StringRtrimPipe();
    expect(pipe.transform('test', 't')).toEqual('tes');
  });

  it('it should trim space if chars not passes', () => {
    const pipe = new StringRtrimPipe();
    expect(pipe.transform('test  ')).toEqual('test');
  });
});
