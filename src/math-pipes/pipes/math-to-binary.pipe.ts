import { Pipe, PipeTransform } from '@angular/core';

/**
 * returns the binary representation of a number
 */

@Pipe({ name: 'toBinary' })
export class MathToBinaryPipe implements PipeTransform {
  public transform(value: number, base: number = 2): string {
    return isNaN(value) ? value as any : value.toString(base);
  }
}
