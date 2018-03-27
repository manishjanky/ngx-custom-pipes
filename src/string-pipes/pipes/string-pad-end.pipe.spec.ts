import { StringPadEndPipe } from './string-pad-end.pipe';

describe('StringPadEndPipe', () => {
  it('create an instance', () => {
    const pipe = new StringPadEndPipe();
    expect(pipe).toBeTruthy();
  });

  it('should pad the string at end with specified chars', () => {
    const pipe = new StringPadEndPipe();
    expect(pipe.transform('kjwgjgewfjegwychgdg', 3)).toEqual('kjwgjgewfjegwychgdg   ');
  });

  it('should pad the string at end with specified chars', () => {
    const pipe = new StringPadEndPipe();
    expect(pipe.transform('kjwgjgewfjegwychgdg', null, 'abc')).toEqual('kjwgjgewfjegwychgdgabc');
  });

  it('should pad the string at end with specified chars', () => {
    const pipe = new StringPadEndPipe();
    expect(pipe.transform('kjwgjgewfjegwychgdg', 1, 'abc')).toEqual('kjwgjgewfjegwychgdga');
  });
});
