import { StringUcfirstPipe } from './string-ucfirst.pipe';

describe('StringUcfirstPipe', () => {
  it('create an instance', () => {
    const pipe = new StringUcfirstPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return string with first letter as uppercase', () => {
    const pipe = new StringUcfirstPipe();
    expect(pipe.transform('test')).toEqual('Test');
  });
});
