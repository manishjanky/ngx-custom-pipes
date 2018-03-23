import { Pipe, PipeTransform } from '@angular/core';
/**
 * converts radians to degrees
 */
@Pipe({
  name: "degrees"
})
export class MathDegreesPipe implements PipeTransform {
  public transform(value: number): number {
    return isNaN(value) ? value : value * 180 / Math.PI;
  }
}
