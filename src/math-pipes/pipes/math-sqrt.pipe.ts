import { Pipe, PipeTransform } from '@angular/core';

/**
 *calculates the square root of a given number
 */

@Pipe({
  name: 'sqrt'
})
export class MathSqrtPipe implements PipeTransform {

  public transform(value: number): number {
    return isNaN(value) ? value : Math.sqrt(value);
  }

}
