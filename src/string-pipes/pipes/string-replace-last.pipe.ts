import { Pipe, PipeTransform } from '@angular/core';
/**
 * replaces last occurance of a character
 */
@Pipe({
  name: "replaceLast"
})
export class StringReplaceLastPipe implements PipeTransform {
  public transform(value: string, replaceChar: string, replaceWith?: string) {
    const re = new RegExp(replaceChar + '([^' + replaceChar + ']*)$');
    replaceWith = replaceWith ? replaceWith : "";
    return value.replace(re, replaceWith + '$1');
  }
}
