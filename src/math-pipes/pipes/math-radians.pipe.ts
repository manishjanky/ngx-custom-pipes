import { Pipe, PipeTransform } from '@angular/core';
/**
 * converts degrees to radians
 */
@Pipe({
  name: "radians"
})
export class MathRadiansPipe implements PipeTransform {
  public transform(value: number): number {
    return isNaN(value) ? value : value * Math.PI / 180;
  }
}
