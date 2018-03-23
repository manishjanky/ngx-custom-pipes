import { StringCamelCasePipe } from './string-camel-case.pipe';

describe('StringCamelCasePipe', () => {
  it('create an instance', () => {
    const pipe = new StringCamelCasePipe();
    expect(pipe).toBeTruthy();
  });

  it('should convert string to camel case', () => {
    const pipe = new StringCamelCasePipe();
    expect(pipe.transform("hello werrrt")).toEqual("Hello Werrrt");
  });
});
