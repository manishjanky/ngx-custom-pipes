import { StringAbbrevCurrencyPipe } from './string-abbrev-currency.pipe';

describe('StringAbbrevCurrencyPipe', () => {
  it('create an instance', () => {
    const pipe = new StringAbbrevCurrencyPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return shortened name', () => {
    const pipe = new StringAbbrevCurrencyPipe();
    expect(pipe.transform(1000000000000, 2)).toEqual("1.00T");
  });

  it('should return shortened name as full name', () => {
    const pipe = new StringAbbrevCurrencyPipe();
    expect(pipe.transform(1000000000000, 2, true)).toEqual("1.00Trillion");
  });

  it('should return shortened name when string has commas', () => {
    const pipe = new StringAbbrevCurrencyPipe();
    expect(pipe.transform('1,000,000,000', 2)).toEqual("1.00B");
  });

  it('should return shortened name when string has commas', () => {
    const pipe = new StringAbbrevCurrencyPipe();
    expect(pipe.transform('100', 2)).toEqual("100");
  });

  it('should return shortened name when string has commas', () => {
    const pipe = new StringAbbrevCurrencyPipe();
    expect(pipe.transform('1,000,000,000')).toEqual("1.00B");
  });
});
