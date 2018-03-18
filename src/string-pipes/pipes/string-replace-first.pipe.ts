import { Pipe, PipeTransform } from '@angular/core';
/**
 * changes first letter of string to uppercase
 */
@Pipe({
  name: "replaceFirst"
})
export class StringReplaceFirstPipe implements PipeTransform {
  public transform(value: string, replaceChar: string, replaceWith?: string) {
    const re = new RegExp("^[" + replaceChar + "]", "g");
    return value.replace(re, replaceWith ? replaceWith : "");
  }
}
