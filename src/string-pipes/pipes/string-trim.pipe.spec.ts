import { StringTrimPipe } from './string-trim.pipe';

describe('StringTrimPipe', () => {
  it('create an instance', () => {
    const pipe = new StringTrimPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return the trimmed string', () => {
    const pipe = new StringTrimPipe();
    expect(pipe.transform('testttt', 't')).toEqual('es');
  });

  it('should return the trimmed string when no character specified', () => {
    const pipe = new StringTrimPipe();
    expect(pipe.transform('testttt')).toEqual('testttt');
  });
});
