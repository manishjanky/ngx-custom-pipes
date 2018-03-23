import { Pipe, PipeTransform } from '@angular/core';
/**
 * changes first letter of string to uppercase
 */
@Pipe({
  name: "ltrim"
})
export class StringLtrimPipe implements PipeTransform {
  public transform(value: string, chars: string) {
    if (chars.length === 0) {
      return value.trim();
    }
    const re = new RegExp("^[" + chars + "]+", "g");
    return value.replace(re, "").trim();
  }
}
