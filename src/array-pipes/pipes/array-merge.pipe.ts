import { Pipe, PipeTransform } from "@angular/core";
/**
 * merges two or more arrays
 */
@Pipe({
  name: "merge"
})
export class ArrayMergePipe implements PipeTransform {
  public transform(array: any, ...arrays: any[]): any[] {
    if (!Array.isArray(array)) {
      return array;
    }
    return array.concat(...arrays);
  }
}
