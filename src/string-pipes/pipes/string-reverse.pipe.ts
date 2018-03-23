import { Pipe, PipeTransform } from '@angular/core';
/**
 * reverses the string
 */
@Pipe({
  name: "reverse"
})
export class StringReversePipe implements PipeTransform {
  public transform(value: string) {
    let wordsReversed: string[] = value.split(" ").reverse();
    wordsReversed = wordsReversed.map((word) => word.split("").reverse().join(""));
    return wordsReversed.join(" ");
  }
}
