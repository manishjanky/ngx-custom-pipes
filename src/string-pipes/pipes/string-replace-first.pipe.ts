import { Pipe, PipeTransform } from '@angular/core';
/**
 * replaces the first occurance of the character with specified characterss
 */
@Pipe({
  name: "replaceFirst"
})
export class StringReplaceFirstPipe implements PipeTransform {
  public transform(value: string, replaceChar: string, replaceWith?: string) {
    const re = new RegExp("[" + replaceChar + "]");
    replaceWith = replaceWith ? replaceWith : "";
    return value.replace(re, replaceWith);
  }
}
