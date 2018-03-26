import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "min"
})
export class ArrayMinPipe implements PipeTransform {
  public transform(array: any) {
    if (!Array.isArray(array) || isNaN(array[0])) {
      return 0;
    }
    return Math.min(...array);
  }
}
