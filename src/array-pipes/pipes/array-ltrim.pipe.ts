import { Pipe, PipeTransform } from "@angular/core";
/**
 * ltrims an array
 */
@Pipe({
  name: "ltrim"
})
export class ArrayRightTrimPipe implements PipeTransform {
  public transform(array: any[], items: number) {
    if (!Array.isArray(array)) {
      return array;
    }
    array.splice(0, items);
    return array;
  }
}
