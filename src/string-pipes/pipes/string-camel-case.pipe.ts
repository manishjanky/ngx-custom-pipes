import { Pipe, PipeTransform } from '@angular/core';
/**
 * changes first letter of string to uppercase
 */
@Pipe({
  name: "camelCase"
})
export class StringCamelCasePipe implements PipeTransform {
  public transform(value: string) {
    const replaceChars = ["-_ "];
    const re = new RegExp("[" + replaceChars + "]", "g");
    const replacedString: any = value.replace(re, " ");
    return replacedString.split(" ").map((word) =>  word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  }
}
