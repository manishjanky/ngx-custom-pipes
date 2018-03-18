import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: "roundoff" })
export class MathRoundOffPipe implements PipeTransform {
  public transform(value: number, digits: number = 0): number {
    return isNaN(value) ? value : +value.toFixed(digits);
  }
}
