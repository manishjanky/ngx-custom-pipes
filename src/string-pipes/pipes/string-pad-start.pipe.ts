import { Pipe, PipeTransform } from '@angular/core';
/**
 * pads the string at start where target length of string will be string length + count
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
