import { Pipe, PipeTransform } from '@angular/core';
/**
 * changes the string to camelCase string
 */
@Pipe({
  name: "camelCase"
})
export class StringCamelCasePipe implements PipeTransform {
  public transform(value: string) {
    const replaceChars = ["-_ "];
    const re = new RegExp("[" + replaceChars + "]", "g");
    const replacedString: any = value.replace(re, " ");
    return replacedString.split(" ").map((word) =>  word.charAt(0).toUpperCase() + word.slice(1)).join("");
  }
}
