import { Pipe, PipeTransform } from '@angular/core';
/**
 * Returns the short profile user name for a string
 * John Doe === JD
 */
@Pipe({
  name: "shorten"
})
export class StringShortenPipe implements PipeTransform {
  public transform(value: string) {
    const splitWords = value.split(" ");
    return splitWords[0].charAt(0).toUpperCase() + splitWords[1].charAt(0).toUpperCase();
  }
}
