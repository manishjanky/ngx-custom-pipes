import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "reverse"
})
export class ArrayMinPipe implements PipeTransform {
  public transform(array: any[]) {
    if (!Array.isArray(array)) {
      return array;
    }
    return array.reverse();
  }
}
