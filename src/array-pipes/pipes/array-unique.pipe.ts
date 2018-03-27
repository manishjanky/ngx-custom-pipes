import { Pipe, PipeTransform } from "@angular/core";
/**
 * returns unique elements from an array
 */
@Pipe({
  name: "unique"
})
export class ArrayUniquePipe implements PipeTransform {
  public transform(array: any[]) {
    if (!Array.isArray(array)) {
      return array;
    }
    if (typeof array[0] !== 'object') {
      return array.filter((value, index, self) => self.indexOf(value) === index);
    }
    const a = [];
    for (const item of array) {
      if (!this.findObjectInArray(a, item)) {
        a.push(item);
      }
    }
    return a;
  }

  private findObjectInArray(array: any[], object: any) {
    let found = false;
    for (const item of array) {
      if (JSON.stringify(item) === JSON.stringify(object)) {
        found = true;
      }
    }
    return found;
  }
}
