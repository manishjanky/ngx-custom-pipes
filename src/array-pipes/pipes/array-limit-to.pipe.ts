import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "limitTo"
})
export class ArrayLimitToPipe implements PipeTransform {
  public transform(array: any[], itemsCount: number, startIndex: number = 0) {
    if (!Array.isArray(array)) {
      return array;
    }
    return array.splice(startIndex, itemsCount);
  }
}
