import { Pipe, PipeTransform } from '@angular/core';
/**
 * changes first letter of string to uppercase
 */
@Pipe({
  name: "ucfirst"
})
export class StringUcfirstPipe implements PipeTransform {
  transform(value: String) {
    return value && value.charAt(0).toUpperCase() + value.slice(1);
  }
}