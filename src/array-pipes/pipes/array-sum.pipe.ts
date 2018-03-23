import { Pipe, PipeTransform } from "@angular/core";
/**
 * returns a shuffled array
 */
@Pipe({
  name: "sum"
})
export class ArraySumPipe implements PipeTransform {
  public transform(array: number[]): number {
    if (isNaN(array[0])) {
      return 0;
    }
    return array.reduce((a, b) => a + b, 0);
  }
}
