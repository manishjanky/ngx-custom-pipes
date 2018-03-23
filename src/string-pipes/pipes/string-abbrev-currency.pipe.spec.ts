import { StringAbbrevCurrencyPipe } from './string-abbrev-currency.pipe';

describe('StringAbbrevCurrencyPipe', () => {
  it('create an instance', () => {
    const pipe = new StringAbbrevCurrencyPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return shortened name', () => {
    const pipe = new StringAbbrevCurrencyPipe();
    expect(pipe.transform(1000000000000, 2)).toBeTruthy("10.00B");
  });
});
