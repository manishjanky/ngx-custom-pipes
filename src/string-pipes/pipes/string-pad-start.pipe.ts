import { Pipe, PipeTransform } from '@angular/core';
/**
 * changes first letter of string to uppercase
 */
@Pipe({
  name: 'padStart'
})
export class StringPadStartPipe implements PipeTransform {
  public transform(value: any, count: number, chars?: string) {
    if (!count) {
      count = chars.length;
    }
    return value.padStart(value.length + count, chars ? chars : ' ');
  }
}
