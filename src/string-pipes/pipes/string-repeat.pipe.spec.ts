import { StringRepeatPipe } from './string-repeat.pipe';

describe('StringRepeatPipe', () => {
  it('create an instance', () => {
    const pipe = new StringRepeatPipe();
    expect(pipe).toBeTruthy();
  });
  it('should repeat the string n number of time', () => {
    const pipe = new StringRepeatPipe();
    expect(pipe.transform("repeat", 2)).toEqual("repeatrepeat");
  });
});
