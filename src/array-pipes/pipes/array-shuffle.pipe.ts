import { Pipe, PipeTransform } from "@angular/core";
/**
 * returns a shuffled array
 */
@Pipe({
  name: "shuffle"
})
export class ArrayShufflePipe implements PipeTransform {
  public transform(array: any[]) {
    if (!Array.isArray(array)) {
      return array;
    }
    return array.sort(() => Math.random() - 0.5);
  }
}
