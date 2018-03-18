import { Pipe, PipeTransform } from '@angular/core';
/**
 * changes first letter of string to uppercase
 */
@Pipe({
  name: "reverse"
})
export class StringReversePipe implements PipeTransform {
  transform(value: String) {
    let wordsReversed : Array<string> =  value.split(" ").reverse();
    wordsReversed = wordsReversed.map(word=> word.split("").reverse().join(""));
    return wordsReversed.join(" ");
  }
}