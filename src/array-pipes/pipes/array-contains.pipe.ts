import { Pipe, PipeTransform } from "@angular/core";
/**
 * returns if the item is present in the array or not.
 */
@Pipe({
  name: "contains"
})
export class ArrayContainsPipe implements PipeTransform {
  public transform(array: any, item: any) {
    if (!Array.isArray(array)) {
      return false;
    }
    return array.includes(item);
  }
}
