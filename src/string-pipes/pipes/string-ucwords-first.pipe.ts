import { Pipe, PipeTransform } from "@angular/core";

/**
 * change first letter of each word to uppercase
 */
@Pipe({
  name: "ucwordsfirst"
})
export class StringUcwordsFirstPipe implements PipeTransform {
  public transform(value: string): string {
    let words = value.split(" ");
    words = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return words.join(" ");
  }
}
