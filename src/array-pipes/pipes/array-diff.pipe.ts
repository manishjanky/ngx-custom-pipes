import { Pipe, PipeTransform } from "@angular/core";
/**
 * returns difference between two arrays i.e the items unique to both arrays.
 */
@Pipe({
  name: "diff"
})
export class ArrayDiffPipe implements PipeTransform {
  public transform(array: any[], seconndArray: any = []): any[] {
    if (!Array.isArray(array)) {
      return array;
    }
    return array.filter((item) => !seconndArray.includes(item))
      .concat(seconndArray.filter((item) => !array.includes(item)));
  }
}
