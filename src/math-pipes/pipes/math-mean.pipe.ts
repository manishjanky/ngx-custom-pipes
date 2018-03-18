import { Pipe, PipeTransform } from "@angular/core";
/**
 * Returns the average of an array of numbers
 */
@Pipe({
  name: "mean"
})
export class MathMeanPipe implements PipeTransform {
  public transform(array: number[]) {
    if (!Array.isArray(array)) {
      return array;
    }
    if (!array.length || isNaN(array[0])) {
      return 0;
    }
    const sum = array.reduce((a, b) => {
      return a + b;
    }, 0);
    return sum / array.length;
  }
}
