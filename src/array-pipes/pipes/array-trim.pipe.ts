import { Pipe, PipeTransform } from "@angular/core";
/**
 * trims array from both ends with specified no of elements
 */
@Pipe({
  name: "trim"
})
export class ArrayTrimPipe implements PipeTransform {
  public transform(array: any, items: number) {
    if (!Array.isArray(array)) {
      return array;
    }
    array.splice(0, items);
    array.splice(-items, items);
    return array;
  }
}
