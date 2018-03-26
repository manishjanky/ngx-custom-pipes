import { StringReplacePipe } from './string-replace.pipe';

describe('StringReplacePipe', () => {
  it('create an instance', () => {
    const pipe = new StringReplacePipe();
    expect(pipe).toBeTruthy();
  });

  it('should replace all occurances', () => {
    const pipe = new StringReplacePipe();
    expect(pipe.transform('eerrttyyttuu', 't','x')).toEqual('eerrxxyyxxuu');
  });

  it('should replace last occurance of char', () => {
    const pipe = new StringReplacePipe();
    expect(pipe.transform('eerrttyyttuu', 't')).toEqual('eerryyuu');
  });
});
