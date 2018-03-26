import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "sortBy"
})
export class ArraySortByPipe implements PipeTransform {
  public transform(array: any[], reverse: boolean = false, prop?: string) {
    if (!Array.isArray(array)) {
      return array;
    }
    if (array.length) {
      let sortedArray: any[];
      if (typeof array[0] === "string") {
        sortedArray = array.sort();
      }
      if (typeof array[0] === "number") {
        sortedArray = array.sort((a, b) => a - b);
      }
      if (typeof array[0] === "object") {
        sortedArray = array.sort((a, b) => a[prop].toString().localeCompare(b[prop].toString()));
      }

      return !reverse ? sortedArray : sortedArray.reverse();
    }
    return array;
  }
}
