import { Pipe, PipeTransform } from "@angular/core";
/**
 * returns the items which occur more than once in array i.e duplicates.
 */
@Pipe({
  name: "dupes"
})
export class ArrayDupesPipe implements PipeTransform {
  public transform(array: any[], key?: string): any[] {
    if (!Array.isArray(array)) {
      return array;
    }
    let sorted_arr = array.slice().sort();
    const result = [];
    if (typeof array[0] !== "object") {
      for (let i = 0; i < sorted_arr.length - 1; i++) {
        if (sorted_arr[i + 1] === sorted_arr[i] && result.indexOf(sorted_arr[i]) === -1) {
          result.push(sorted_arr[i]);
        }
      }
    } else {
      if (!key && typeof key !== "string") {
        return array;
      }
      if (Object.keys(array[0]).indexOf(key) === -1) {
        return array;
      }
      sorted_arr = array.sort((a, b) => a[key].toString().localeCompare(b[key].toString()));
      for (let j = 0; j < sorted_arr.length - 1; j++) {
        if (sorted_arr[j + 1][key] === sorted_arr[j][key]) {
          result.push(sorted_arr[j]);
        }
      }

    }
    return result;
  }
}
