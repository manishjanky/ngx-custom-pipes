import { Pipe, PipeTransform } from '@angular/core';

/*
 * Calculate the percentage of value of argument
*/

@Pipe({ name: 'prcnt' })
export class MathPercentagePipe implements PipeTransform {
  public transform(value: number, total: number = 100) {
    return isNaN(value) ? value : (value / total) * 100 + "%";
  }
}
