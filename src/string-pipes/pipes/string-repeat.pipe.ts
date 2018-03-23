import { Pipe, PipeTransform } from '@angular/core';
/**
 * repeats the string n number of times
 */
@Pipe({
  name: "repeat"
})
export class StringRepeatPipe implements PipeTransform {
  public transform(value: string, count: number = 1) {
    return value.repeat(count);
  }
}
