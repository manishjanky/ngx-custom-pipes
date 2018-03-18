import { Pipe, PipeTransform } from '@angular/core';
/**
 * changes first letter of string to uppercase
 */
@Pipe({
  name: "padStart"
})
export class StringPadStartPipe implements PipeTransform {
  transform(value: String,count: number, chars?: String) {
    if(!count){
      count = chars.length;
    }
    //return value.padStart(value.length + count, chars?chars:" ");
    return null;
  }
}