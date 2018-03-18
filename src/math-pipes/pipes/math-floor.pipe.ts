import { Pipe, PipeTransform } from '@angular/core';

/*
 * Calculate the floor value of argument
*/

@Pipe({ name: 'floor' })
export class MathFloorPipe implements PipeTransform {
  public transform(value: number): number {
    return isNaN(value) ? value : Math.floor(value);
  }
}
