import { Pipe, PipeTransform } from '@angular/core';

/*
 * returns the decimal/hexadecimmal etc representation of a number
*/

@Pipe({ name: 'fromBinary' })
export class MathFromBinaryPipe implements PipeTransform {
  public transform(value: any, base: number = 2): number {
    return parseInt(value, base);
  }
}
