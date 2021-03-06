
import { Pipe, PipeTransform } from "@angular/core";
/**
 * right trims an array
 */
@Pipe({
  name: "rtrim"
})
export class ArrayRtrimPipe implements PipeTransform {
  public transform(array: any[], items: number = 0) {
    if (!Array.isArray(array)) {
      return array;
    }
    array.splice(-items, items);
    return array;
  }
}
