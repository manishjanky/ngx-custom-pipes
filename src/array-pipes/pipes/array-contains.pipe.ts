import { Pipe, PipeTransform } from "@angular/core";
/**
 * returns difference between two arrays i.e the items unique to both arrays.
 */
@Pipe({
  name: "contains"
})
export class ArrayContainsPipe implements PipeTransform {
  public transform(array: any[], item: any) {
    if (!Array.isArray(array)) {
      return array;
    }
    return array.includes(item);
  }
}
