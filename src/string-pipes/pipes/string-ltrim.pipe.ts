import { Pipe, PipeTransform } from '@angular/core';
/**
 * trims the characters from left if match found
 */
@Pipe({
  name: "ltrim"
})
export class StringLtrimPipe implements PipeTransform {
  public transform(value: string, chars?: string) {
    if (!chars || chars.length === 0) {
      return value.trim();
    }
    const re = new RegExp("^[" + chars + "]+", "g");
    return value.replace(re, "").trim();
  }
}
