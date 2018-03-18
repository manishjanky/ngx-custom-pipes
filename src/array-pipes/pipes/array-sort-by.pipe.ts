import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "sortBy"
})
export class ArraySortByPipe implements PipeTransform {
  public transform(array: any[], prop?: string, reverse: boolean = false) {
    if (!Array.isArray(array)) {
      return array;
    }
    if (array.length) {
      if (typeof array[0] === "string") {
        return array.sort();
      }
      if (typeof array[0] === "number") {
        return array.sort((a, b) => a - b);
      }
      const sortedArray = array.sort((a, b) => a[prop].toString().localeCompare(b[prop].toString()));
      return !reverse ? sortedArray : sortedArray.reverse();
    }
    return array;
  }
}
