import { Pipe, PipeTransform } from "@angular/core";
/**
 * returns the items that fall in the specified range
 * of start and end index
 */
@Pipe({
  name: "range"
})
export class ArrayRangePipe implements PipeTransform {
  public transform(array: any[], startIndex: number = 0, endIndex: number = array.length) {
    if (!Array.isArray(array)) {
      return array;
    }
    return array.slice(startIndex, endIndex + 1);
  }
}
