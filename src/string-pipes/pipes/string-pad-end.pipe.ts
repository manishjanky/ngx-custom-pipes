import { Pipe, PipeTransform } from '@angular/core';
/**
 * pads the string at end where target length of string will be string length + count 
 */
@Pipe({
  name: 'padEnd'
})
export class StringPadEndPipe implements PipeTransform {
  public transform(value: any, count: number = 0, chars?: string) {
    if (!count) {
      count = chars.length;
    }
    return value.padEnd(value.length + count, chars ? chars : ' ');
  }
}
