import { Pipe, PipeTransform } from '@angular/core';
/**
 * changes first letter of string to uppercase
 */
@Pipe({
  name: "padEnd"
})
export class StringPadEndPipe implements PipeTransform {
  public transform(value: String,count: number,chars?: String) {
    if(!count){
      count = chars.length;
    }
    //return value.padEnd(value.length + count, chars?chars:" ");
    return null;
  }
}