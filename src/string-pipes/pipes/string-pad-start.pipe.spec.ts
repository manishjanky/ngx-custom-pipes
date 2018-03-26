import { StringPadStartPipe } from './string-pad-start.pipe';

describe('StringPadStartPipe', () => {
  it('create an instance', () => {
    const pipe = new StringPadStartPipe();
    expect(pipe).toBeTruthy();
  });

  it('should pad the string at end with specified chars', () => {
    const pipe = new StringPadStartPipe();
    expect(pipe.transform("kjwgjgewfjegwychgdg", 3)).toEqual("   kjwgjgewfjegwychgdg");
  });

  it('should pad the string at end with specified chars', () => {
    const pipe = new StringPadStartPipe();
    expect(pipe.transform("kjwgjgewfjegwychgdg", null,'abc')).toEqual("abckjwgjgewfjegwychgdg");
  });

  it('should pad the string at end with specified chars', () => {
    const pipe = new StringPadStartPipe();
    expect(pipe.transform("kjwgjgewfjegwychgdg", 1,'abc')).toEqual("akjwgjgewfjegwychgdg");
  });
});
