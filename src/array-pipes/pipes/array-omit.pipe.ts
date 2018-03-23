import { Pipe, PipeTransform } from "@angular/core";
/**
 * omits the passed elements from array
 */
@Pipe({
  name: "omit"
})
export class ArrayOmitPipe implements PipeTransform {
  public transform(array: any[], omitParams: any[] = []) {
    if (!Array.isArray(array) || !Array.isArray(omitParams)) {
      return array;
    }
    omitParams.forEach((item) => {
      const index = array.indexOf(item);
      array.splice(index, 1);
    });
    return array;
  }
}
