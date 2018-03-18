import { Pipe, PipeTransform } from '@angular/core';
/*
 * Calculate the exponential power of argument
*/
@Pipe({ name: 'pow' })
export class MathPowPipe implements PipeTransform {
  public transform(value: number, pow: number): number {
    return isNaN(value) ? value : Math.pow(value, isNaN(pow) ? 1 : pow);
  }
}
