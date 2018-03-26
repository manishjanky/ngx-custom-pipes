import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "reverse"
})
export class ArrayReversePipe implements PipeTransform {
  public transform(array: any) {
    if (!Array.isArray(array)) {
      return array;
    }
    return array.reverse();
  }
}
