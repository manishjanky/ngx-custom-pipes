import { Pipe, PipeTransform } from '@angular/core';
/**
 * changes first letter of string to uppercase
 */
@Pipe({
  name: "replaceFirst"
})
export class StringRepeatPipe implements PipeTransform {
  public transform(value: string, count: number = 1) {
    return value.repeat(count);
  }
}
