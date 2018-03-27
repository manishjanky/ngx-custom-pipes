import { Pipe, PipeTransform } from '@angular/core';
/**
 * replaces all occurrances of particular character with specified characters
 */
@Pipe({
  name: "replace"
})
export class StringReplacePipe implements PipeTransform {
  public transform(value: string, replaceChar: string, replaceWith?: string) {
    const re = new RegExp("[" + replaceChar + "]", "g");
    return value.replace(re, replaceWith ? replaceWith : "");
  }
}
