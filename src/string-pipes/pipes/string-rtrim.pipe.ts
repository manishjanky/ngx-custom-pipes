import { Pipe, PipeTransform } from '@angular/core';
/**
 * changes first letter of string to uppercase
 */
@Pipe({
  name: "rtrim"
})
export class StringRtrimPipe implements PipeTransform {
  transform(value: String, chars: String) {
    if (chars.length == 0) {
      return value.trim();
    }
    const re = new RegExp("[" + chars + "]+$", "g");
    return value.replace(re, "").trim();
  }
}