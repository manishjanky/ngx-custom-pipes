import { Pipe, PipeTransform } from "@angular/core";
/**
 * returns the median of an array
 */
@Pipe({
  name: "median"
})
export class MathMedianPipe implements PipeTransform {
  public transform(array: number[]): number {
    if (!Array.isArray(array) || array.length === 0 || isNaN(array[0])) {
      return 0;
    }

    let median = 0;
    const len = array.length;
    array.sort((a, b) => a - b);
    if (len % 2 === 0) {
      median = (array[len / 2 - 1] + array[len / 2]) / 2;
    } else {
      median = array[(len - 1) / 2];
    }

    return median;
  }
}
