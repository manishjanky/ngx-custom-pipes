import { Pipe, PipeTransform } from '@angular/core';

/*
 * Calculate the ceiling value of argument
*/

@Pipe({ name: 'ceil' })
export class MathCeilingPipe implements PipeTransform {
  public transform(value: number): number {
    return isNaN(value) ? value : Math.ceil(value);
  }
}
