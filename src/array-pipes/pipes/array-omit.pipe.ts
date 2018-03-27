import { Pipe, PipeTransform } from "@angular/core";
/**
 * omits the passed elements from array
 */
@Pipe({
  name: "omit"
})
export class ArrayOmitPipe implements PipeTransform {
  public transform(array: any[], omitParams: any = []) {
    const inputArray = JSON.parse(JSON.stringify(array));
    if (!Array.isArray(array) || !Array.isArray(omitParams)) {
      return array;
    }
    omitParams.forEach((item) => {
      const index = inputArray.indexOf(item);
      if (index > -1) {
        inputArray.splice(index, 1);
      }
    });
    return inputArray;
  }
}
