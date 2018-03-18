import { StringCamelCasePipe } from './string-camel-case.pipe';

describe('StringCamelCasePipe', () => {
  it('create an instance', () => {
    const pipe = new StringCamelCasePipe();
    expect(pipe).toBeTruthy();
  });
});
