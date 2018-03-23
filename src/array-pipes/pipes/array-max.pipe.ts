import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "max"
})
export class ArrayMaxPipe implements PipeTransform {
  public transform(array: number[]) {
    if (!Array.isArray(array) || isNaN(array[0])) {
      return 0;
    }
    return Math.max(...array);
  }
}
